package com.pansoft.lcdp.server.plugins;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pansoft.lcdp.server.context.DemoContext;

import com.efounder.bz.service.ServiceException;
import com.efounder.bz.service.ServicePluginAdapter;
import com.efounder.eai.data.JParamObject;
import com.efounder.eai.data.JResponseObject;

/**
 * 示例插件1
 * @Description:TODO
 * @author ZhangJQ
 * @time:2018年8月30日 下午7:19:32
 */
public class FirstDemoPlugin extends ServicePluginAdapter {
    private static final Logger logger = LoggerFactory.getLogger(FirstDemoPlugin.class);

	public Object executeProcessService(DemoContext demoContext,
			JResponseObject responseObject) throws Exception {
		
		JResponseObject response = demoContext.getResponseObject();
		if(response.getErrorCode() < 0){
			return response;
		}
		JParamObject po = demoContext.getParamObject();
		
		logger.info(demoContext.getDemoObj());
		demoContext.setDemoObj("change first !");
		ServiceException exc = new ServiceException();
		exc.setErrorCode(-502);
		exc.setErrorMessage("抛異常");
		if (false) {
		    logger.error("一場");
		    throw exc;
		}
        logger.info("first plugin!");
        response.setResponseObject("First", "Add by first plugin!");
		return response;
	}
}
