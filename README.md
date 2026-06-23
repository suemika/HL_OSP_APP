# HL_OSP_APP

基于 **Pansoft OSP 6.5** 低代码平台构建的企业级业务应用，服务于华龙装备（HLZB）的营销管理、生产进度跟踪、客户关系、合同管理、售后服务等核心业务场景。

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 基础框架 | Spring Boot 2.x + OSP Starter Parent 6.6.7400 |
| 低代码平台 | OSP Platform（元数据管理、表单引擎、服务编排、流程引擎） |
| 前端 | React + Ant Design + OSP Grid / BPMN |
| 持久层 | OSP JConnection（支持 MySQL、达梦等） + Flyway 数据库版本管理 |
| 中间件 | Redis (Jedis)、ZooKeeper、Dubbo、Elasticsearch、MinIO、MongoDB |
| 构建工具 | Maven，支持 jar / war 双模式打包 |

## 快速开始

### 环境要求

- JDK 1.8+
- Maven 3.6+
- IDE（推荐 IntelliJ IDEA）

### 本地运行

1. 克隆项目并导入 IDEA
2. 配置数据源等基础参数（见配置文件部分）
3. 启动入口类 `com.pansoft.lcdp.OSPApplication`
4. 访问 `http://localhost:8080/OSPApplication/index.html`

### 构建打包

```shell
# war 包（默认）
mvn clean package

# jar 包
mvn clean package -Pjar
```

构建产物位于 `target/OSPApplication/`。

## 项目结构

```
HL_OSP_APP
├── pom.xml                          # Maven 项目描述文件
└── src/main
    ├── java/com/pansoft/lcdp
    │   ├── OSPApplication.java      # Spring Boot 启动入口
    │   ├── config/                  # 配置类（流程过滤器等）
    │   ├── interceptor/             # Web MVC 拦截器配置
    │   └── server
    │       ├── component/           # 服务组件（Demo）
    │       ├── context/             # 自定义上下文
    │       ├── plugins/             # 服务插件
    │       │   ├── FirstDemoPlugin.java           # 示例插件1
    │       │   ├── SecondDemoPlugin.java          # 示例插件2
    │       │   └── GenericQueryUpdatePlugin.java  # 通用数据库 CRUD 插件
    │       └── restful/             # REST 微服务端点
    └── resources
        ├── Config/                  # 配置文件目录
        │   ├── datasource.properties    # 数据源
        │   ├── redis.properties         # Redis
        │   ├── elasticsearch.properties # Elasticsearch
        │   ├── minio.properties         # MinIO 对象存储
        │   ├── mongodb.properties       # MongoDB
        │   ├── dubbo.properties         # Dubbo RPC
        │   ├── flyway.properties        # 数据库迁移
        │   ├── email.properties         # 邮件
        │   ├── configCenter.xml         # 配置中心
        │   └── mobilenote.properties    # 移动端
        ├── WEB-INF/
        │   ├── CnfgSpace/           # 数据库配置空间
        │   ├── FlowSpace/           # 流程定义 XML
        │   ├── ReactFormSpace/      # 前端表单 JSON（240+ 业务模块）
        │   └── SQLProperties/       # 业务模块 SQL 属性文件
        ├── Package/                 # 部署包描述符
        └── static/react/            # 前端静态资源（React 构建产物）
```

## 配置文件

所有运行参数通过 `src/main/resources/Config/` 下的 properties 文件管理。启动前请根据实际环境修改。

## 核心业务模块

项目包含华龙装备的业务模块：客户管理、合同管理、生产进度跟踪、售后服务、报表中心（20+ 报表）、基础数据（产品编码/型号/部门/组织）、EAM 设备资产、营销体系、竞品管理等。

## 开发约定

- **服务插件**：继承 `ServicePluginAdapter`，实现 `executeProcessService`，通过 Service Component 的 prepare → process → finish 生命周期调用
- **REST 端点**：通过 OSP 微服务基类（`ESPMircoServLog` 等）扩展，注册到 `Package/server/package.xml`
- **前端表单**：`ReactFormSpace/` 下以 JSON 描述布局，SQL 在 `SQLProperties/` 下以 properties 管理
- **流程定义**：`FlowSpace/` 下以 XML 定义审批流，通过 OSP Flow Driver 驱动
