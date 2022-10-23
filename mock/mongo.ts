import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { successResp } from './_utils';

const requests: MockMethod[] = [
  {
    url: '/api/v1/bson',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;
      return successResp({
        data: {
          document: Random.string('lower', 1, 6),
        },
      });
    },
  },
  {
    url: '/api/v1/mgdb/meta/db',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;
      return successResp({});
    },
  },
  {
    url: '/api/v1/mgdb/meta/collection',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;

      return successResp({});
    },
  },
  {
    url: '/api/v1/mgdb/meta/doc',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;

      return successResp({});
    },
  },
  {
    url: '/api/v1/mgdb/meta/index',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;

      return successResp({});
    },
  },
  {
    url: '/api/v1/mgdb/meta/attr',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;

      return successResp({});
    },
  },
];

export default requests;
