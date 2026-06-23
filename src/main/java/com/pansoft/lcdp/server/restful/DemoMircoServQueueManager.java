package com.pansoft.lcdp.server.restful;

import javax.servlet.http.HttpServletRequest;

import com.efounder.eai.data.JResponseObject;
import com.efounder.paas.service.ESPMircoServQueueManager;

public class DemoMircoServQueueManager extends ESPMircoServQueueManager {
    
    /**
     * 执行服务前执行该插件 可以在此做一些判断 不满足的就可以返回
     * 
     * 当 res.ErrorCode < 0 时直接返回 返回的信息为
     * {ErrorCode:res.ErrorCode,ErrorString:res.ErrorString};
     */
    @Override
    public JResponseObject checkMircoService(HttpServletRequest request,
            Object Param, Object Data, Object CustomObject,
            Object AdditiveObject) {
        
        JResponseObject res = new JResponseObject("出現錯誤了", 0);
        res.setErrorString("出错了");
        return res;
    }
    
    /**
     * 此方法暂时没用
     */
    @Override
    public Object checkToken() {
        // TODO Auto-generated method stub
        return null;
    }
    
}
