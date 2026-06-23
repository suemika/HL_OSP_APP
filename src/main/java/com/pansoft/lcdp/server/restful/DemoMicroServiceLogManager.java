package com.pansoft.lcdp.server.restful;

import javax.servlet.http.HttpServletRequest;

import com.efounder.eai.data.JResponseObject;
import com.efounder.paas.service.ESPMircoServLog;

public class DemoMicroServiceLogManager extends ESPMircoServLog {

    /**
     * 程序开始时 写日志操作
     */
	@Override
	public Object startCallMircoSetrviceLog(HttpServletRequest request,
			Object Param, Object Data, Object CustomObject,
			Object AdditiveObject, String MircoSetrviceId) {
	    
		return null;
	}

	/**
	 * 程序结束时 写日志操作
	 */
	@Override
	public Object EndCallMircoSetrviceLog(HttpServletRequest request,
			Object PO, JResponseObject RO, String MircoSetrviceId) throws Exception {
		return null;
	}
}
