package com.pansoft.lcdp.server.plugins;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pansoft.lcdp.server.context.DemoContext;

import com.efounder.builder.base.data.EFDataSet;
import com.efounder.bz.service.ServicePluginAdapter;
import com.efounder.eai.data.JParamObject;
import com.efounder.eai.data.JResponseObject;

/**
 * 示例插件2
 * @Description:TODO
 * @author ZhangJQ
 * @time:2018年8月30日 下午7:19:32
 */
public class SecondDemoPlugin extends ServicePluginAdapter {
    private static final Logger logger = LoggerFactory.getLogger(SecondDemoPlugin.class);

	public Object executeProcessService(DemoContext demoContext,
			JResponseObject responseObject) throws Exception {
		
		JResponseObject response = demoContext.getResponseObject();
		if(response.getErrorCode() < 0){
			return response;
		}
		JParamObject po = demoContext.getParamObject();
        
        logger.info(demoContext.getDemoObj());
        demoContext.setDemoObj("change Second !");

		logger.info("second plugin!");
		response.setResponseObject("Second", "Add by second plugin!");
		return response;
	}
}
