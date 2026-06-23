package com.pansoft.lcdp.server.context;

import com.efounder.builder.base.util.ESPServerContext;
import com.efounder.eai.data.JParamObject;
import com.efounder.eai.service.dal.JDALDBManagerObject;
import com.efounder.sql.JConnection;

/**
 * @Description:TODO 图像处理上下文
 * 
 * @author: zjq
 * @time:2017年7月26日 上午10:07:13
 */
public class DemoContext extends ESPServerContext {

	protected DemoContext() {
	}

	/**
	 * 这个可以是任意对象任意值 方便在上下文中传递
	 */
	private String demoObj = "";
	public String getDemoObj() {
        return demoObj;
    }
    public void setDemoObj(String demoObj) {
        this.demoObj = demoObj;
    }
    /**
	 * 初始化上下文
	 * @param paramObject
	 * @param connection
	 * @return
	 */
	public static DemoContext getInstance(JParamObject paramObject,
			JConnection connection) {
	    DemoContext demoContext = new DemoContext();
	    demoContext.paramObject = paramObject;
		if (connection != null) {
		    demoContext.connection = connection;
			if ((connection.getDataBaseType() == null)
					|| ("".equals(connection.getDataBaseType()))) {
				try {
					JDALDBManagerObject.initConnection(connection, paramObject);
				} catch (Exception localException) {
				}
			}
		}
		demoContext.setDemoObj("Just Demo !");
		return demoContext;
	}
}
