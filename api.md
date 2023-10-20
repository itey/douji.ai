### 1.��¼ע��

Api path��

```bash
   http://43.198.63.219:1538/api/login
```

##### HTTP request method

post

##### Request parameters:

| ������  | Լ��-required | ����   | ˵��    |
| :------ | :----------- | :----- | :----- |
| address | true         | string | ��ַ    |
| signed  | true         | string | ǩԼ���� |

##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "id": 12,
    "address": "0xCAC7BFd2B83DaAcbf6A9f6146CB6dF88f9e05f0d",
    "token": "1212121212121212" //���ʱ�վ�����ӿ�Ҫ��header�д��ϴ˲���
  }
}
```

##### Response the result data code instructions

| code | ˵�� |
| ---- | :-- |
| 0    | ʧ�� |
| 1    | �ɹ� |

### 2.�ϴ�ipfs�ļ�

Api path��

```bash
   http://43.198.63.219:1538/api/uploadFile
```

##### HTTP request method

post

##### Request parameters:

| ������ | Լ��-required | ���� | ˵�� |
| :----- | :----------- | :--- | :-- |
| file   | true         | File | �ļ� |

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

| code | ˵�� |
| ---- | :-- |
| 0    | ʧ�� |
| 1    | �ɹ� |

### 3.�ϴ�ipfs json����

Api path��

```bash
   http://43.198.63.219:1538/api/uploadJson
```

##### HTTP request method

post

##### Request parameters:

| ������   | Լ��-required | ����         | ˵��    |
| :------- | :----------- | :----------- | :----- |
| jsonData | true         | bas464(json) | string |

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

| code | ˵�� |
| ---- | :-- |
| 0    | ʧ�� |
| 1    | �ɹ� |
