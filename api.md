### 1.登录注册

Api path：

```bash
   http://43.198.63.219:1538/api/login
```

##### HTTP request method

post

##### Request parameters:

| 参数名  | 约束-required | 类型   | 说明     |
| :------ | :------------ | :----- | :------- |
| address | true          | string | 地址     |
| signed  | true          | string | 签约内容 |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "id": 12,
    "address": "0xCAC7BFd2B83DaAcbf6A9f6146CB6dF88f9e05f0d",
    "token": "1212121212121212" //访问本站其他接口要在header中带上此参数
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 2.上传 ipfs 文件

Api path：

```bash
   http://43.198.63.219:1538/api/uploadFile
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |
| file   | true          | File | 文件 |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu"
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 3.上传 ipfs json 数据

Api path：

```bash
   http://43.198.63.219:1538/api/uploadJson
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型         | 说明   |
| :------- | :------------ | :----------- | :----- |
| jsonData | true          | bas464(json) | string |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu"
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 4.加密内容

Api path：

```bash
   http://43.198.63.219:1538/api/encryptContent
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型     | 说明   |
| :----- | :------------ | :------- | :----- |
| url    | true          | ipfs url | string |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "encrypted": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxreeeeeee"
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 5.解锁加密内容

Api path：

```bash
   http://43.198.63.219:1538/api/unlockContent
```

##### HTTP request method

post

##### Request parameters:

| 参数名    | 约束-required | 类型               | 说明   |
| :-------- | :------------ | :----------------- | :----- |
| encrypted | true          | 加密后的 url       | string |
| tokenId   | true          | 要解密的的 tokenId | int    |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://111111/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxreeeeeee"
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 6.每天签到

Api path：

```bash
   http://43.198.63.219:1538/api/checkIn
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型                                                      | 说明   |
| :----- | :------------ | :-------------------------------------------------------- | :----- |
| signed | true          | 钱包签的内容 Wellcome to DOUJI,A beautiful day has begun! | string |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "amount": 1212121 //签到获取的mbd额度
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 7.每隔 5 分钟检查一下有没有要下发的盲盒

Api path：

```bash
   http://43.198.63.219:1538/api/checkHasBox
```

##### HTTP request method

get

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "get_box_flag": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" //获取盲盒的时候要用到
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 8.收盲盒

Api path：

```bash
   http://43.198.63.219:1538/api/getBox
```

##### HTTP request method

post

##### Request parameters:

| 参数名       | 约束-required | 类型                                  | 说明   |
| :----------- | :------------ | :------------------------------------ | :----- |
| signed       | true          | 钱包签的内容 Collect DOUJI Blind Box! | string |
| get_box_flag | true          | 收取标志 接口 7 提供                  | string |
| tokenId      | true          | 当前页面的 tokenId                    | int    |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
       "open_box_flag": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" //开盲盒标志
       "amount": 1212121 //签到获取的mbd额度
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 9.开盲盒

Api path：

```bash
   http://43.198.63.219:1538/api/openBox
```

##### HTTP request method

post

##### Request parameters:

| 参数名        | 约束-required | 类型                               | 说明   |
| :------------ | :------------ | :--------------------------------- | :----- |
| signed        | true          | 钱包签的内容 Open DOUJI Blind Box! | string |
| open_box_flag | true          | 收取标志 接口 8 提供               | string |
| hashTx        | true          | 转账交易 hash                      | string |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "amount": 1111,
    "coin": "MBD" //MBD|BJXStar NFT
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 10.上传 ipfs 文本数据

Api path：

```bash
   http://43.198.63.219:1538/api/uploadContent
```

##### HTTP request method

post

##### Request parameters:

| 参数名      | 约束-required | 类型            | 说明   |
| :---------- | :------------ | :-------------- | :----- |
| contentData | true          | bas464(content) | string |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu"
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 11.NFT 内容分类

Api path：

```bash
   http://43.198.63.219:1538/api/getNftTypes
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 1,
        "e_name": "Article",
        "c_name": "文章",
        "status": 1
      },
      {
        "id": 2,
        "e_name": "Prompt",
        "c_name": "Prompt指令",
        "status": 1
      },
      {
        "id": 3,
        "e_name": "Digital Arts",
        "c_name": "數字藝術品",
        "status": 1
      },
      {
        "id": 4,
        "e_name": "Graphic Novels",
        "c_name": "圖像小說",
        "status": 1
      },
      {
        "id": 5,
        "e_name": "Electric Book",
        "c_name": "電子書",
        "status": 1
      },
      {
        "id": 6,
        "e_name": "Photography",
        "c_name": "攝影",
        "status": 1
      },
      {
        "id": 7,
        "e_name": "Audio",
        "c_name": "音頻",
        "status": 1
      },
      {
        "id": 8,
        "e_name": "Video",
        "c_name": "影視",
        "status": 1
      },
      {
        "id": 9,
        "e_name": "Social Media Posts",
        "c_name": "社交媒體帖子",
        "status": 1
      }
    ]
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 12.NFT 内容分类

Api path：

```bash
   http://43.198.63.219:1538/api/getNftCategoriesByType
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |
| type   | true          | 1    | int  |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 4,
        "e_name": "AI",
        "c_name": "人工智能"
      },
      {
        "id": 5,
        "e_name": "AIGC",
        "c_name": "生成式人工智能"
      },
      {
        "id": 11,
        "e_name": "Bitcoin",
        "c_name": "比特幣"
      },
      {
        "id": 12,
        "e_name": "BlockChain",
        "c_name": "區塊鏈"
      },
      {
        "id": 14,
        "e_name": "Business",
        "c_name": "商業"
      },
      {
        "id": 18,
        "e_name": "ChatGPT",
        "c_name": "ChatGPT"
      },
      {
        "id": 25,
        "e_name": "Crypto",
        "c_name": "加密貨幣"
      },
      {
        "id": 29,
        "e_name": "DiFi",
        "c_name": "去中心化金融"
      },
      {
        "id": 34,
        "e_name": "Ethereum",
        "c_name": "以太坊"
      },
      {
        "id": 37,
        "e_name": "Finance",
        "c_name": "金融"
      },
      {
        "id": 43,
        "e_name": "GameFi",
        "c_name": "遊戲金融"
      },
      {
        "id": 57,
        "e_name": "IT",
        "c_name": "IT"
      },
      {
        "id": 63,
        "e_name": "Markets",
        "c_name": "市場"
      },
      {
        "id": 64,
        "e_name": "Metaverse",
        "c_name": "元宇宙"
      },
      {
        "id": 72,
        "e_name": "NFT",
        "c_name": "NFT"
      },
      {
        "id": 96,
        "e_name": "Software",
        "c_name": "軟件"
      },
      {
        "id": 106,
        "e_name": "Technology",
        "c_name": "科技"
      },
      {
        "id": 109,
        "e_name": "Tools",
        "c_name": "工具應用"
      },
      {
        "id": 116,
        "e_name": "Web3",
        "c_name": "Web3"
      },
      {
        "id": 118,
        "e_name": "WIKI",
        "c_name": "維基百科"
      }
    ]
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 13.NFT 内容语音

Api path：

```bash
   http://43.198.63.219:1538/api/getNftLanguages
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 1,
        "english": "English",
        "chinese": "英语",
        "status": 1
      },
      {
        "id": 2,
        "english": "Chinese",
        "chinese": "中文",
        "status": 1
      },
      {
        "id": 3,
        "english": "Japanese",
        "chinese": "日語",
        "status": 1
      },
      {
        "id": 4,
        "english": "Korean",
        "chinese": "韓語",
        "status": 1
      },
      {
        "id": 5,
        "english": "Spanish",
        "chinese": "西班牙語",
        "status": 1
      },
      {
        "id": 6,
        "english": "French",
        "chinese": "法語",
        "status": 1
      },
      {
        "id": 7,
        "english": "Russian",
        "chinese": "俄語",
        "status": 1
      },
      {
        "id": 8,
        "english": "German",
        "chinese": "德語",
        "status": 1
      },
      {
        "id": 9,
        "english": "Portuguese",
        "chinese": "葡萄牙語",
        "status": 1
      },
      {
        "id": 10,
        "english": "Italian",
        "chinese": "意大利語",
        "status": 1
      },
      {
        "id": 11,
        "english": "Arabic",
        "chinese": "阿拉伯語",
        "status": 1
      },
      {
        "id": 12,
        "english": "Other",
        "chinese": "其他語種",
        "status": 1
      }
    ]
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 14.NFT 内容平台

Api path：

```bash
   http://43.198.63.219:1538/api/getNftPlatformsByType
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |
| type   | true          | 2    | int  |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 1,
        "e_name": "Earnie Bot",
        "c_name": "文言一心",
        "status": 1
      },
      {
        "id": 2,
        "e_name": "DALL·E",
        "c_name": "DALL·E",
        "status": 1
      },
      {
        "id": 3,
        "e_name": "GPT",
        "c_name": "GPT",
        "status": 1
      },
      {
        "id": 4,
        "e_name": "Leonardo Ai",
        "c_name": "Leonardo Ai",
        "status": 1
      },
      {
        "id": 5,
        "e_name": "Llama",
        "c_name": "Llama",
        "status": 1
      },
      {
        "id": 6,
        "e_name": "Midjourney",
        "c_name": "Midjourney",
        "status": 1
      },
      {
        "id": 7,
        "e_name": "Stable Diffusion",
        "c_name": "Stable Diffusion",
        "status": 1
      },
      {
        "id": 8,
        "e_name": "IFlytek Spark",
        "c_name": "訊飛星火",
        "status": 1
      },
      {
        "id": 9,
        "e_name": "GLM",
        "c_name": "智譜清言",
        "status": 1
      },
      {
        "id": 10,
        "e_name": "Tongyi Qianwen",
        "c_name": "通義千問",
        "status": 1
      },
      {
        "id": 11,
        "e_name": "Grace",
        "c_name": "字節豆包",
        "status": 1
      },
      {
        "id": 12,
        "e_name": "PANGU",
        "c_name": "華為盤古",
        "status": 1
      }
    ]
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 15.更新用户信息

Api path：

```bash
   http://43.198.63.219:1538/api/updateUserInfo
```

##### HTTP request method

post

##### Request parameters:

| 参数名            | 约束-required | 类型              | 说明   |
| :---------------- | :------------ | :---------------- | :----- |
| nickname          | true          | 昵称              | string |
| head_img          | true          | 头像 url          | string |
| short_description | true          | short_description | string |
| location          | true          | location          | string |
| twitter           | true          | twitter           | string |
| telegram          | true          | telegram          | string |
| facebook          | true          | facebook          | string |
| tiktok            | true          | tiktok            | string |
| linkedin          | true          | linkedin          | string |
| medium            | true          | medium            | string |
| whatsapp          | true          | whatsapp          | string |
| website           | true          | website           | string |
| instagram         | true          | instagram         | string |
| youtube           | true          | youtube           | string |
| github            | true          | github            | string |
| wechat            | true          | wechat            | string |
| discord           | true          | discord           | string |
| line              | true          | line              | string |
| bilibili          | true          | bilibili          | string |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {}
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 16.获取用户信息

Api path：

```bash
   http://43.198.63.219:1538/api/getUserInfo
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |

##### Response parameters:

```json
{
  "code": 1,
  "message": "success",
  "data": {
    "id": 60,
    "address": "0X36CBE8B131451DC4BAE73B867DB998504CF2A86F",
    "nickname": null,
    "head_img": null,
    "status": 0,
    "create_time": "2023-10-20 17:21:57",
    "update_time": null,
    "email": null,
    "short_description": null,
    "location": null,
    "twitter": null,
    "telegram": null,
    "facebook": null,
    "tiktok": null,
    "linkedin": null,
    "medium": null,
    "whatsapp": null,
    "website": null,
    "instagram": null,
    "youtube": null,
    "github": null,
    "wechat": null,
    "discord": null,
    "line": null,
    "bilibili": null
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 17.我的 NFT

Api path：

```bash
   http://43.198.63.219:1538/api/myNfts
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明                       |
| :----- | :------------ | :--- | :------------------------- |
| page   | true          | int  | 页码 默认 1 每页显示 20 条 |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "pageCount": 11,
    "page": 1,
    "list": [
      {
        "token_id": 1,
        "name": "Darkness Of light",
        "title": "Darkness Of light",
        "image": "https://img.tamagonft.xyz/697214642.jpg",
        "description": "A place of darkness with the small light from the shadow and the heavy rain and mist of elements",
        "category": "Social Media/SEO",
        "content_type": null,
        "owner_address": "0xb51dcc6075778ae0ce49c61db0326e412b40ddf1",
        "language": "Unset",
        "read_duration": "0.00",
        "collect_count": 0,
        "praise_count": 0,
        "holdCount": 5
      },
      {
        "token_id": 8,
        "name": "The Mischievous Monkey and the Clever Capture: A T",
        "title": "The Mischievous Monkey and the Clever Capture: A T",
        "image": "https://ipfs.io/ipfs/bafybeibazb63rakworln3fa3mhgfgsqo36km4ructzosdfqolm4ouoauwi",
        "description": "Marvin, a mischievous monkey, wreaks havoc in a town until an old man cleverly uses free bananas to trap him, teaching everyone a valuable l",
        "category": "Business",
        "content_type": "Article",
        "owner_address": "0xb51dcc6075778ae0ce49c61db0326e412b40ddf1",
        "language": null,
        "read_duration": "0.00",
        "collect_count": 0,
        "praise_count": 0,
        "holdCount": 50
      },
      {
        "token_id": 10,
        "name": "Wix Launches Conversational AI Chat for Personaliz",
        "title": "Wix Launches Conversational AI Chat for Personaliz",
        "image": "https://ipfs.io/ipfs/bafkreibpp7gcnjsg3ais4sazatdsxr4fmy3yv367mujj7wnkjbeyon54oe",
        "description": "Wix.com has introduced a conversational AI chat feature for human-like conversations and essential insights into specific business objective",
        "category": "AI",
        "content_type": "Article",
        "owner_address": "0xb51dcc6075778ae0ce49c61db0326e412b40ddf1",
        "language": null,
        "read_duration": "0.00",
        "collect_count": 0,
        "praise_count": 0,
        "holdCount": 50000
      },
      {
        "token_id": 11,
        "name": "Best 7 AI Text Humanizers to Convert from ChatGPT into Human-Written Text",
        "title": "Best 7 AI Text Humanizers to Convert from ChatGPT into Human-Written Text",
        "image": "https://ipfs.io/ipfs/bafkreihsw75pkrp4hpu7wukczgk6neiy5vrd2vwkgasaoxvwuckfwcwiqy",
        "description": "AI-generated content can sometimes sound robotic and mechanical. Now, there’s a solution that bridges this gap and ensures your AI-generated text is not only human-like but also undetectable by AI detectors.",
        "category": "ChatGPT",
        "content_type": "Article",
        "owner_address": "0xb51dcc6075778ae0ce49c61db0326e412b40ddf1",
        "language": null,
        "read_duration": "0.00",
        "collect_count": 0,
        "praise_count": 0,
        "holdCount": 50
      }
    ]
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 18.NFT 列表

Api path：

```bash
   http://43.198.63.219:1538/api/nftList
```

##### HTTP request method

post

##### Request parameters:

| 参数名       | 约束-required | 类型   | 说明                       |
| :----------- | :------------ | :----- | :------------------------- |
| page         | true          | int    | 页码 默认 1 每页显示 20 条 |
| content_type | true          | string | 类型                       |
| category     | true          | string | 分类                       |
| pltform      | true          | string | 平台                       |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 7,
        "token_id": 7,
        "name": "Outman",
        "title": "Outman",
        "image": "https://ipfs.io/ipfs/bafkreifivdsx2gcsolhrdqthuiryz3p5pfxjvhpeqikiycipw7s6c476ai",
        "description": "奥特曼，又称「初代奥特曼」，是日本特摄剧《奥特曼》中的主人公 [6] 。首次登场于《奥特曼》第1话《奥特作战第一号》（1966年7月17日首播）",
        "category": null,
        "content_type": "Digital Arts",
        "owner_address": "0x36cbe8b131451dc4bae73b867db998504cf2a86f",
        "language": null,
        "read_duration": "0.00",
        "collect_count": 0,
        "praise_count": 0,
        "pltform": null,
        "nickname": "你是什么夫斯基"
      },
      {
        "id": 6,
        "token_id": 6,
        "name": "DOUJI.AI",
        "title": "DOUJI.AI",
        "image": "https://ipfs.io/ipfs/bafybeiamml3dkatjvrvkcz2jyvccstbyff3xz7fvxand5h3glbnxnusduu",
        "description": "There are 5 incredible Moca tribes of the Angels, Builders, Dreamers, Connectors, and Neo-Capitalists. ",
        "category": null,
        "content_type": "Article",
        "owner_address": "0x36cbe8b131451dc4bae73b867db998504cf2a86f",
        "language": null,
        "read_duration": "0.00",
        "collect_count": 0,
        "praise_count": 0,
        "pltform": null,
        "nickname": "你是什么夫斯基"
      }
    ],
    "pageCount": 11,
    "page": 1
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 19.NFT 订单列表

Api path：

```bash
   http://43.198.63.219:1538/api/nftOrders
```

##### HTTP request method

post

##### Request parameters:

| 参数名  | 约束-required | 类型 | 说明                       |
| :------ | :------------ | :--- | :------------------------- |
| page    | true          | int  | 页码 默认 1 每页显示 20 条 |
| tokenId | true          | int  | tokenId                    |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 1,
        "assetAddress": "0xe210760d3f8b9b820856443547abfafdc5101705",
        "tokenId": 1,
        "tokenValue": 1,
        "nftType": 1,
        "owner": "0xb51dcc6075778ae0ce49c61db0326e412b40ddf1",
        "price": 10000000,
        "active": 1,
        "ended": 0,
        "ordeId": 1
      }
    ],
    "page": 1
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 20.用户当日阅读情况

Api path：

```bash
   http://43.198.63.219:1538/api/getTodayReadData
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明 |
| :----- | :------------ | :--- | :--- |

##### Response parameters:

```json
{
  "code": 1,
  "message": "success",
  "data": {
    "income_sum": 1.0, //今日收益
    "duration_sum": 1, //观看时长秒
    "reads_count": 1 //领取个数
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 21.通知更新订单

Api path：

```bash
   http://43.198.63.219:1538/api/notifyUpdateOrder
```

##### HTTP request method

post

##### Request parameters:

| 参数名  | 约束-required | 类型 | 说明    |
| :------ | :------------ | :--- | :------ |
| tokenId | true          | int  | tokenId |

##### Response parameters:

```json
{
  "code": 1,
  "message": "success",
  "data": {}
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 22.NFT 最后 10 比交易记录

Api path：

```bash
   http://43.198.63.219:1538/api/getNftTransactions
```

##### HTTP request method

post

##### Request parameters:

| 参数名  | 约束-required | 类型 | 说明    |
| :------ | :------------ | :--- | :------ |
| tokenId | true          | int  | tokenId |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "from": "0x910e991a290edf015273696f6c54f340f4e31de5",
        "to": "0x0a8901b0e25deb55a87524f0cc164e9644020eba",
        "event_type": "Transfer",
        "amount": "1",
        "hash": "xxxxxxxx"
      }
    ]
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 23.NFT 更新 uri 记录

Api path：

```bash
   http://43.198.63.219:1538/api/nftUpdateLog
```

##### HTTP request method

post

##### Request parameters:

| 参数名  | 约束-required | 类型 | 说明                       |
| :------ | :------------ | :--- | :------------------------- |
| tokenId | true          | int  | tokenId                    |
| page    | true          | int  | 页码 默认 1 每页显示 20 条 |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 1,
        "tokenId": 1,
        "uri": "https://ipfs.io/ipfs/bafkreigv7by3mhtg5ztzpzam22fibusrgsiuvwd2nyzxvsdbzlrrufcpmm",
        "create_time": "2023-11-11 16:29:34",
        "transactionHash": "0x6abd70134130c810cb5672c3b792dd6f2a0ebc2ea3ec506b11f4c9a9e3f0b432",
        "block_number": null
      }
    ],
    "pageCount": 1,
    "page": 1
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 24.质押解押通知

Api path：

```bash
   http://43.198.63.219:1538/api/notifypledge
```

##### HTTP request method

post

##### Request parameters:

| 参数名  | 约束-required | 类型 | 说明    |
| :------ | :------------ | :--- | :------ |
| tokenId | true          | int  | tokenId |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {}
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |

### 25.质押待结算列表

Api path：

```bash
   http://43.198.63.219:1538/api/pledgeSettleList
```

##### HTTP request method

post

##### Request parameters:

| 参数名 | 约束-required | 类型 | 说明                       |
| :----- | :------------ | :--- | :------------------------- |
| page   | true          | int  | 页码 默认 1 每页显示 20 条 |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "list": [{ "token_id": 111111 }],
    "page": 1
  }
}
```

##### Response the result data code instructions

| code | 说明 |
| ---- | :--- |
| 0    | 失败 |
| 1    | 成功 |
