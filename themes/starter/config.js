/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '决讼，触不直', // 英雄区文字
  STARTER_HERO_TITLE_2: '路漫漫其修远兮,吾将共同上下而求索', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '了解我们', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '#', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '联系我们', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '#', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: 'images/starter/hero/hejintai-qt-241204.jpg', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '优势', // 特性
  STARTER_FEATURE_TEXT_1: '和谨泰的优势', // 特性
  STARTER_FEATURE_TEXT_2:
    '和谨泰律所拥有一支高素质律师队伍，每位律师都在各自领域内具有深厚经验，部分律师还担任政府、企事业单位的法律顾问。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '精英团队，专业服务', // 特性1
  STARTER_FEATURE_1_TEXT_1: '我们拥有一支经验丰富的律师团队，涵盖多个专业领域。律师们不仅具备深厚的法律功底，还积累了丰富的实战经验，能够为客户提供高效、优质的法律服务。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '#', // 特性1

  STARTER_FEATURE_2_TITLE_1: '高效灵活，运营一体化', // 特性2
  STARTER_FEATURE_2_TEXT_1: '和谨泰律所采用一体化运营模式，整合资源与专业，确保内部高效协作，最大限度地提升客户体验与服务效率。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '#', // 特性2

  STARTER_FEATURE_3_TITLE_1: '品牌化创新，服务差异化', // 特性3
  STARTER_FEATURE_3_TEXT_1: '我们注重品牌建设，通过差异化的服务创新，打造独特的法律服务产品，为客户创造更大的价值。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '#', // 特性3

  STARTER_FEATURE_4_TITLE_1: '强大案源支持，精准匹配需求', // 特性4
  STARTER_FEATURE_4_TEXT_1: '律所配备专业营销团队，具备丰富的推广经验和广泛的渠道资源，能够持续为客户提供高质量的案源和解决方案。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '#', // 特性4
  
  STARTER_FEATURE_1_TITLE_1: '科学管理，无内耗障碍', // 特性5
  STARTER_FEATURE_1_TEXT_1: '执行主任专职负责律所管理，确保决策科学合理，管理流程专业化，避免资源浪费和内部消耗。', // 特性5
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性5
  STARTER_FEATURE_1_BUTTON_URL: '#', // 特性5

  STARTER_FEATURE_2_TITLE_1: '全面支持，合作共赢', // 特性6
  STARTER_FEATURE_2_TEXT_1: '提供全方位支持，包括调档协调、碰庭协作、客户关系维护等，帮助合作伙伴实现共赢。', // 特性6
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性6
  STARTER_FEATURE_2_BUTTON_URL:
    '#', // 特性6

  STARTER_FEATURE_3_TITLE_1: '资源整合，行业领先', // 特性7
  STARTER_FEATURE_3_TEXT_1: '凭借广泛的社会资源和行业渠道，我们在多个领域具备明显的资源整合优势，能够为客户提供跨领域的综合法律服务。', // 特性7
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性7
  STARTER_FEATURE_3_BUTTON_URL: '#', // 特性8

  STARTER_FEATURE_4_TITLE_1: '注重客户关系，信赖长期合作', // 特性8
  STARTER_FEATURE_4_TEXT_1: '和谨泰律所始终将客户需求放在首位，以优质的服务和专业的态度赢得客户的信任，致力于建立长期合作关系。', // 特性8
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性8
  STARTER_FEATURE_4_BUTTON_URL: '#', // 特性8
  
  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '关于我们',
  STARTER_ABOUT_TEXT:
    '和谨泰律所以“维护社会正义，保障客户权益”为宗旨，业务范围覆盖公司法律事务、房地产与建设工程、知识产权、劳动争议、刑事辩护、物业管理及公益法律服务等多个领域。律所现有执业律师13人，配备经验丰富的后勤和业务团队，为客户提供全方位支持。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '#',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: '累积案件',
  STARTER_ABOUT_TIPS_3: '持续增加中……',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '客户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的客户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '我们始终以客户为中心，致力于提供优质、高效、全面的法律服务。客户的信任与满意，是我们不断前行的动力！',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '和谨泰律所的服务非常专业，团队高效解决了我们复杂的合同纠纷问题，为公司挽回了巨大损失。他们是我们最信赖的法律伙伴！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李先生',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '深圳市恒润达建设工程有限公司',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '张宸硕律师和团队在知识产权保护方面的表现令人印象深刻，快速反应且细致周到，为我们公司的品牌保驾护航。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '王女士',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '，深圳市雷霆应急科技有限公司',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '和谨泰律所不仅在法律事务上经验丰富，还能提供战略性建议，帮助我们规避风险，提升企业合规水平，非常值得推荐！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '陈总',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '深圳市崛起教育集团有限公司',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '律所团队始终以客户为中心，为我们提供量身定制的法律服务，效率高且结果满意，我们对合作非常满意！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '赵经理',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '深圳市动力快车实业有限公司',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '刑事辩护团队以专业的态度成功维护了我的合法权益，细致的沟通让我感受到他们的责任心，非常感谢！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '杨先生',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '个人客户',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '在复杂的股权纠纷案件中，和谨泰团队展现了超强的专业能力和执行力，为我们的企业争取到最大的利益，非常感谢他们的支持！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '刘先生',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '深圳市中创智能数字技术有限公司',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的客户疑问',

  STARTER_FAQ_1_QUESTION: '和谨泰律师事务所在保护客户隐私方面有哪些措施？',
  STARTER_FAQ_1_ANSWER:
    '和谨泰律所视客户隐私为首要责任。我们实行严格的内部保密制度，确保案件资料仅限相关团队访问，并使用加密技术保护电子文件的安全。同时，律所定期进行数据安全培训，确保每位员工严格遵守保密义务。',

  STARTER_FAQ_2_QUESTION: '和谨泰律所提供的中小企业法律服务有哪些特色？',
  STARTER_FAQ_2_ANSWER:
    '我们为中小企业提供从公司设立到日常经营的全周期法律服务，包括合同管理、知识产权保护、劳动合规以及股权设计等。同时，我们设计了灵活的服务套餐，帮助中小企业以合理的成本获得精准的法律支持，助力企业稳定成长。',

  STARTER_FAQ_3_QUESTION: '和谨泰律所的服务适合个人客户吗？',
  STARTER_FAQ_3_ANSWER:
    '当然适合。和谨泰律所不仅服务企业，也为个人客户提供优质服务，包括婚姻家事、劳动争议、刑事辩护等领域。我们根据个人客户的具体需求制定定制化的解决方案，确保权益得到最大程度保护。',

  STARTER_FAQ_4_QUESTION: '和谨泰律所是否提供公益法律服务？',
  STARTER_FAQ_4_ANSWER:
    '是的，和谨泰律所积极参与公益事业，定期为社区、困难群体和非营利组织提供免费的法律咨询与服务，履行律所的社会责任，促进法律公平与正义。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '律师团队',
  STARTER_TEAM_TEXT_1: '部分律师介绍',
  STARTER_TEAM_TEXT_2:
    '和谨泰律所拥有一支高素质律师队伍，每位律师都在各自领域内具有深厚经验，部分律师还担任政府、企事业单位的法律顾问。',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: '张宸硕律师',
      STARTER_TEAM_ITEM_DESCRIPTION: '民商事争议解决、刑事辩护、房地产法律事务及股权重组，处理复杂案件'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: '陈军律师',
      STARTER_TEAM_ITEM_DESCRIPTION: '投融资、政府法律顾问及企业破产重整，重大疑难案件'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: '雷宜勇律师',
      STARTER_TEAM_ITEM_DESCRIPTION: '婚姻家事、知识产权及企业合规管理，能提供全面的法律支持'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: '许兆阳律师',
      STARTER_TEAM_ITEM_DESCRIPTION: '行政诉讼、企业顾问及劳动争议，擅长制定针对性法律解决方案'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，深圳',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'coo@jhtfl.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/uiztpq', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: '帮助支持',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: '合作申请',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '升级指南',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        {
          TITLE: 'Notion开始写作',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '快捷键提升效率',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIOTN:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
