package com.pansoft.lcdp.server.component;

import com.efounder.builder.base.util.ESPServerContext;
import com.efounder.bz.service.ServiceComponentAdapter;

public class DemoServiceComponent extends ServiceComponentAdapter {
    public DemoServiceComponent() {
    }
    
    /**
     * 准备操作
     */
    protected Object runPreparePluginService(ESPServerContext espContext,
            Object responseObject) throws Exception {
        
        Object[] OArray = { espContext, responseObject };
        return executePluginService("executePrepareService", OArray, "prepare",
                espContext, responseObject);
    }
    
    /**
     * 过程中
     */
    protected Object runProcessPluginService(ESPServerContext espContext,
            Object responseObject) throws Exception {
        Object[] OArray = { espContext, responseObject };
        return executePluginService("executeProcessService", OArray, "process",
                espContext, responseObject);
    }
    
    /**
     * 结束操作
     */
    protected Object runFinishPluginService(ESPServerContext espContext,
            Object responseObject) throws Exception {
        Object[] OArray = { espContext, responseObject };
        
        return executePluginService("executeFinishService", OArray, "finish",
                espContext, responseObject);
    }
}
