package com.pansoft.lcdp.server.plugins;

import com.efounder.builder.base.data.EFRowSet;
import com.efounder.builder.base.util.ESPServerContext;
import com.efounder.bz.service.ServicePluginAdapter;
import com.efounder.eai.data.JParamObject;
import com.efounder.eai.data.JResponseObject;
import com.efounder.sql.JConnection;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.*;

public class GenericQueryUpdatePlugin extends ServicePluginAdapter {
    private static final Logger logger = LoggerFactory.getLogger(GenericQueryUpdatePlugin.class);

    public Object executeProcessService(ESPServerContext espContext, Object responseObject) throws Exception {
        JParamObject po = espContext.getParamObject();
        JConnection conn = espContext.getConnection();
        EFRowSet returnRowSet = new EFRowSet();
        JResponseObject ro = espContext.getResponseObject();

        logger.info(" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& GenericQueryUpdatePlugin &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ");

        LinkedHashMap<String, Object> paramRoot = (LinkedHashMap<String, Object>) po.getParamRoot();
        String operationType = String.valueOf(paramRoot.get("operationType"));
        String tableName = String.valueOf(paramRoot.get("tableName"));
        String conditionField = String.valueOf(paramRoot.get("conditionField"));
        String conditionValue = String.valueOf(paramRoot.get("conditionValue"));
        String returnField = String.valueOf(paramRoot.get("returnField"));

        // 获取额外参数（用于更新操作或复杂查询）
        Map<String, Object> extraParams = new HashMap<>();
        for (Map.Entry<String, Object> entry : paramRoot.entrySet()) {
            if (entry.getKey().startsWith("param_")) {
                extraParams.put(entry.getKey().substring(6), entry.getValue());
            }
        }

        try {
            if ("queryCount".equals(operationType)) {
                // 查询计数操作
                Map<String, Object> result = executeCountQuery(tableName, conditionField, conditionValue, conn);
                ro.setErrorCode((Integer) result.get("errorCode"));
                ro.setErrorString((String) result.get("errorMsg"));
                returnRowSet.putObject("count", result.get("count"));
                ro.setResponseObject(returnRowSet);

            } else if ("queryData".equals(operationType)) {
                // 查询数据操作
                String fields = String.valueOf(paramRoot.getOrDefault("fields", "*"));
                Map<String, Object> result = executeDataQuery(tableName, fields, conditionField, conditionValue, conn);
                ro.setErrorCode((Integer) result.get("errorCode"));
                ro.setErrorString((String) result.get("errorMsg"));
                returnRowSet.putObject("data", result.get("data"));
                ro.setResponseObject(returnRowSet);

            } else if ("delete".equals(operationType)) {
                // 删除操作
                Map<String, Object> result = executeDelete(tableName, conditionField, conditionValue, conn);
                ro.setErrorCode((Integer) result.get("errorCode"));
                ro.setErrorString((String) result.get("errorMsg"));

            } else if ("update".equals(operationType)) {
                // 更新操作
                Map<String, Object> result = executeUpdate(tableName, conditionField, conditionValue, extraParams, conn);
                ro.setErrorCode((Integer) result.get("errorCode"));
                ro.setErrorString((String) result.get("errorMsg"));

            } else if ("custom".equals(operationType)) {
                // 自定义SQL操作
                String customSql = String.valueOf(paramRoot.get("customSql"));
                Map<String, Object> result = executeCustomOperation(customSql, extraParams, conn);
                ro.setErrorCode((Integer) result.get("errorCode"));
                ro.setErrorString((String) result.get("errorMsg"));
                if (result.containsKey("data")) {
                    returnRowSet.putObject("data", result.get("data"));
                    ro.setResponseObject(returnRowSet);
                }
            } else {
                ro.setErrorCode(1);
                ro.setErrorString("不支持的operationType: " + operationType);
            }
        } catch (Exception e) {
            logger.error("执行操作失败", e);
            ro.setErrorCode(1);
            ro.setErrorString("执行操作失败: " + e.getMessage());
        }

        return ro;
    }

    // 执行计数查询
    private Map<String, Object> executeCountQuery(String tableName, String conditionField,
                                                  String conditionValue, JConnection conn) {
        Map<String, Object> result = new HashMap<>();
        int count = 0;
        int errorCode = 0;
        String errorMsg = "";

        try {
            String sql = String.format("SELECT COUNT(*) AS total FROM %s WHERE %s = ?", tableName, conditionField);
            try (PreparedStatement pst = conn.prepareStatement(sql)) {
                pst.setString(1, conditionValue);
                try (ResultSet rs = pst.executeQuery()) {
                    if (rs.next()) {
                        count = rs.getInt("total");
                    }
                }
            }
            errorMsg = "查询成功";
        } catch (SQLException e) {
            errorCode = 1;
            errorMsg = "查询失败: " + e.getMessage();
            logger.error("执行计数查询失败", e);
        }

        result.put("count", count);
        result.put("errorCode", errorCode);
        result.put("errorMsg", errorMsg);
        return result;
    }

    // 执行数据查询
    private Map<String, Object> executeDataQuery(String tableName, String fields, String conditionField,
                                                 String conditionValue, JConnection conn) {
        Map<String, Object> result = new HashMap<>();
        int errorCode = 0;
        String errorMsg = "";
        EFRowSet data = new EFRowSet();

        try {
            String sql = String.format("SELECT %s FROM %s WHERE %s = ?", fields, tableName, conditionField);
            try (PreparedStatement pst = conn.prepareStatement(sql)) {
                pst.setString(1, conditionValue);
                try (ResultSet rs = pst.executeQuery()) {
                    // 将结果集转换为EFRowSet（这里需要根据实际框架进行调整）
                    // 这里只是示例，实际实现可能需要更复杂的转换逻辑
                    if (rs.next()) {
                        // 假设简单地将第一行数据放入EFRowSet
                        // 实际应用中可能需要遍历所有行
                    }
                }
            }
            errorMsg = "查询成功";
        } catch (SQLException e) {
            errorCode = 1;
            errorMsg = "查询失败: " + e.getMessage();
            logger.error("执行数据查询失败", e);
        }

        result.put("data", data);
        result.put("errorCode", errorCode);
        result.put("errorMsg", errorMsg);
        return result;
    }

    // 执行删除操作
    private Map<String, Object> executeDelete(String tableName, String conditionField,
                                              String conditionValue, JConnection conn) {
        Map<String, Object> result = new HashMap<>();
        int errorCode = 0;
        String errorMsg = "";

        try {
            String sql = String.format("DELETE FROM %s WHERE %s = ?", tableName, conditionField);
            try (PreparedStatement pst = conn.prepareStatement(sql)) {
                pst.setString(1, conditionValue);
                int affectedRows = pst.executeUpdate();
                if (affectedRows > 0) {
                    conn.commit();
                    errorMsg = "删除成功";
                } else {
                    errorMsg = "未找到要删除的记录";
                }
            }
        } catch (SQLException e) {
            errorCode = 1;
            errorMsg = "删除失败: " + e.getMessage();
            logger.error("执行删除失败", e);
        }

        result.put("errorCode", errorCode);
        result.put("errorMsg", errorMsg);
        return result;
    }

    // 执行更新操作
    private Map<String, Object> executeUpdate(String tableName, String conditionField,
                                              String conditionValue, Map<String, Object> updateParams,
                                              JConnection conn) {
        Map<String, Object> result = new HashMap<>();
        int errorCode = 0;
        String errorMsg = "";

        try {
            if (updateParams.isEmpty()) {
                errorCode = 1;
                errorMsg = "更新参数不能为空";
            } else {
                // 构建SET子句
                StringBuilder setClause = new StringBuilder();
                for (String field : updateParams.keySet()) {
                    if (setClause.length() > 0) {
                        setClause.append(", ");
                    }
                    setClause.append(field).append(" = ?");
                }

                String sql = String.format("UPDATE %s SET %s WHERE %s = ?", tableName, setClause, conditionField);
                try (PreparedStatement pst = conn.prepareStatement(sql)) {
                    int paramIndex = 1;
                    // 设置更新参数
                    for (Object value : updateParams.values()) {
                        pst.setObject(paramIndex++, value);
                    }
                    // 设置条件参数
                    pst.setString(paramIndex, conditionValue);

                    int affectedRows = pst.executeUpdate();
                    if (affectedRows > 0) {
                        conn.commit();
                        errorMsg = "更新成功";
                    } else {
                        errorMsg = "未找到要更新的记录";
                    }
                }
            }
        } catch (SQLException e) {
            errorCode = 1;
            errorMsg = "更新失败: " + e.getMessage();
            logger.error("执行更新失败", e);
        }

        result.put("errorCode", errorCode);
        result.put("errorMsg", errorMsg);
        return result;
    }

    // 执行自定义操作
    private Map<String, Object> executeCustomOperation(String customSql, Map<String, Object> params,
                                                       JConnection conn) {
        Map<String, Object> result = new HashMap<>();
        int errorCode = 0;
        String errorMsg = "";

        try {
            // 这里可以根据SQL的类型（查询/更新）来执行不同的操作
            if (customSql.trim().toUpperCase().startsWith("SELECT")) {
                // 查询操作
                try (PreparedStatement pst = conn.prepareStatement(customSql)) {
                    int paramIndex = 1;
                    for (Object value : params.values()) {
                        pst.setObject(paramIndex++, value);
                    }

                    try (ResultSet rs = pst.executeQuery()) {
                        // 处理结果集
                        List<Map<String, Object>> dataList = new ArrayList<>();

                        // 获取结果集的元数据
                        ResultSetMetaData metaData = rs.getMetaData();
                        int columnCount = metaData.getColumnCount();

                        // 遍历结果集
                        while (rs.next()) {
                            Map<String, Object> row = new LinkedHashMap<>();
                            for (int i = 1; i <= columnCount; i++) {
                                String columnName = metaData.getColumnName(i);
                                Object columnValue = rs.getObject(i);
                                row.put(columnName, columnValue);
                            }
                            dataList.add(row);
                        }

                        // 将查询结果放入返回结果中
                        if (!dataList.isEmpty()) {
                            result.put("data", dataList);
                            result.put("total", dataList.size());
                        } else {
                            result.put("data", Collections.emptyList());
                            result.put("total", 0);
                        }

                        errorMsg = "自定义查询执行成功，查询到 " + dataList.size() + " 条记录";
                    }
                }
            } else {
                // 更新操作
                try (PreparedStatement pst = conn.prepareStatement(customSql)) {
                    int paramIndex = 1;
                    for (Object value : params.values()) {
                        pst.setObject(paramIndex++, value);
                    }

                    int affectedRows = pst.executeUpdate();
                    if (affectedRows > 0) {
                        conn.commit();
                    }
                    result.put("affectedRows", affectedRows);
                    errorMsg = "自定义操作执行成功，影响 " + affectedRows + " 行";
                }
            }
        } catch (SQLException e) {
            errorCode = 1;
            errorMsg = "自定义操作执行失败: " + e.getMessage();
            logger.error("执行自定义操作失败", e);
        }

        result.put("errorCode", errorCode);
        result.put("errorMsg", errorMsg);
        return result;
    }
}