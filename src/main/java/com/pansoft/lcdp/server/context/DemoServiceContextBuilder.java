package com.pansoft.lcdp.server.context;

import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.efounder.builder.base.util.ESPServerContext;
import com.efounder.bz.service.ServiceContextBuilder;
import com.efounder.eai.data.JParamObject;
import com.efounder.eai.data.JResponseObject;
import com.efounder.sql.JConnection;

/**
 * 
 * @Description:图像服务环境 
 * 
 * @author: zjq
 * @time:2017年7月21日 下午4:36:34
 */
public class DemoServiceContextBuilder extends ServiceContextBuilder {

    private static final Logger logger = LoggerFactory.getLogger(DemoServiceContextBuilder.class);

	public DemoServiceContextBuilder() {
	}

	@Override
	public Object createResponse(ESPServerContext espContext) throws Exception {
		JResponseObject response = new JResponseObject();
		return response;
	}

	@Override
	protected void finishContext(ESPServerContext espContext, Object response) {
	    /*
	     * 如果对上下文有什么操作可以在这执行 比如关闭filenet连接
	     */
	    if (espContext instanceof DemoContext) {
            logger.info(((DemoContext) espContext).getDemoObj());
            ((DemoContext) espContext).setDemoObj("finishContext !");
            logger.info(((DemoContext) espContext).getDemoObj());
	    }
	    
		if (espContext.getStatement() != null)
			try {
				espContext.getStatement().close();
			} catch (SQLException ex) {
				ex.printStackTrace();
			}
	}

	@Override
	protected ESPServerContext newContext(JParamObject paramObject,JConnection connection, 
			Object dataObject, Object customObject, Object addinObject, int runType) throws Exception {
	    DemoContext imageConext = DemoContext.getInstance(paramObject, connection);
		return imageConext;
	}
}
