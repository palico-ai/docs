export interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
  }>
}

export enum AppRoute {
  Quickstart = '/',
  Components = '/components',
  Build = '/guides/build',
  PreviewChanges = '/guides/preview_changes',
  FeatureFlag = '/guides/feature_flag',
  AiGateway = '/guides/ai_gateway',
  PromptManagement = '/guides/prompt_management',
  Telemetry = '/guides/telemetry',
  Experiments = '/guides/experiments',
  ClientSdk = '/guides/client_sdk',
  Deployment = '/guides/deployment',
  Langchain = '/integrations/langchain',
  LlamaIndex = '/integrations/llamaindex',
  LlmProviders = '/integrations/llm_providers',
  VectorDb = '/integrations/vector_db',
  ChatbotWithMemory = '/cookbooks/building_a_chatbot_with_memory',
  RagApplication = '/cookbooks/building_a_rag_application',
  AiTextEditor = '/cookbooks/building_ai_text_editor',
  ClassifyNewsArticles = '/cookbooks/classify_news_articles',
  DocumentQa = '/cookbooks/document_qa',
  TextToSql = '/cookbooks/text_to_sql',
  UnstructuredToJson = '/cookbooks/unstructured_to_json',
  ImprovingRagPerformance = '/cookbooks/improving_rag_performance',
  CompareMultipleModels = '/cookbooks/compare_multiple_models',
}

export const SIDEBAR_NAVIGATION: Array<NavGroup> = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Quickstart', href: AppRoute.Quickstart },
      { title: 'Components', href: AppRoute.Components },
    ],
  },
  {
    title: 'Guides',
    links: [
      { title: 'Build Your Application', href: AppRoute.Build },
      { title: 'Preview Changes', href: AppRoute.PreviewChanges },
      { title: 'Hot-swap Components', href: AppRoute.FeatureFlag },
      { title: 'AI Gateway', href: AppRoute.AiGateway },
      { title: 'Prompt Management', href: AppRoute.PromptManagement },
      { title: 'Logging And Tracing', href: AppRoute.Telemetry },
      { title: 'Experiments', href: AppRoute.Experiments },
      { title: 'Client SDK', href: AppRoute.ClientSdk },
      { title: 'Deployment', href: AppRoute.Deployment },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { title: 'LangChain', href: AppRoute.Langchain },
      { title: 'LlamaIndex', href: AppRoute.LlamaIndex },
      { title: 'Model Providers', href: AppRoute.LlmProviders },
      { title: 'Vector Databases', href: AppRoute.VectorDb },
    ],
  },
  {
    title: 'Cookbook',
    links: [
      {
        title: 'Chatbot with Memory',
        href: AppRoute.ChatbotWithMemory,
      },
      {
        title: 'RAG Application',
        href: AppRoute.RagApplication,
      },
      {
        title: 'AI Text Editor',
        href: AppRoute.AiTextEditor,
      },
      {
        title: 'Classify News Articles',
        href: AppRoute.ClassifyNewsArticles,
      },
      {
        title: 'Q&A Over Documents',
        href: AppRoute.DocumentQa,
      },
      { title: 'Text to SQL', href: AppRoute.TextToSql },
      {
        title: 'Unstructured Data to JSON',
        href: AppRoute.UnstructuredToJson,
      },
      {
        title: 'Improving RAG Performance',
        href: AppRoute.ImprovingRagPerformance,
      },
      {
        title: 'Compare Different Models',
        href: AppRoute.CompareMultipleModels,
      },
    ],
  },
]
