package com.pansoft.lcdp.server.restful;

import java.util.Iterator;

import net.sf.json.JSONObject;

import com.efounder.bz.flow.task.util.json.JSONUtils;
import com.efounder.eai.data.JParamObject;
import com.efounder.paas.microservice.ParamCvt.ESPMircoParamCvtManager;

public class DemoMircoParamCvtManager extends ESPMircoParamCvtManager {

    /**
     * 将来源参数json字符串转换为对象
     * 包括：Param, Data, CustomObject, AdditiveObject
     */
	@Override
	public Object cvtRequestObject(Object dataobj, String jsonstr) throws Exception {
		JSONObject json = JSONObject.fromObject(jsonstr);
		if(dataobj instanceof JParamObject){
			Iterator iterator = json.keys();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				String value = json.getString(key);
				((JParamObject) dataobj).SetValueByEnvName(key, value);
				((JParamObject) dataobj).SetValueByParamName(key, value);
			}
		}
		return dataobj;
	}

	/**
	 * 设置PO的参数
	 */
	@Override
	public JParamObject cvtJParamObject(JParamObject PO) {
	    return super.cvtJParamObject(PO);
	}
	/**
	 * 将RO转换为json传返回给前台
	 */
	@Override
	public String cvtResponseObject(Object responseObject) throws Exception {
		return  JSONUtils.bean2JSON(responseObject);
	}
}
