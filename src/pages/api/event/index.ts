// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IEvent {
  EVNT_ID: string
  END_YN: string
  BNFS_EXPU_YN: string // 혜택존 노출 여부
  ICON_FILE_NM: string // 아이콘 파일 이름
  TTL_CND?: string // 타이틀 조건
  TTL_BNFS: string // 타이틀 혜택
  EVNT_TAG?: string // 배지
  BIZ_DS_CD: string
  IS_USE_LNK: string
  LNK_URL: string
  START_DTTM: string
  END_DTTM: string
}

interface Data {
  events: IEvent[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const events = [
    {
      EVNT_ID: '1',
      END_YN: 'N',
      BNFS_EXPU_YN: 'Y',
      ICON_FILE_NM: 'sample001.jpg',
      TTL_CND: 'TTL_CND - 1',
      TTL_BNFS: '기부 이벤트 - 1',
      EVNT_TAG: 'COUNTDOWN',
      BIZ_DS_CD: '',
      IS_USE_LNK: 'N',
      LNK_URL: '',
      START_DTTM: '20230301000000',
      END_DTTM: '20230413000000',
    },
    {
      EVNT_ID: '2',
      END_YN: 'N',
      BNFS_EXPU_YN: 'Y',
      ICON_FILE_NM: 'sample001.jpg',
      TTL_CND: 'TTL_CND - 2',
      TTL_BNFS: '기부 이벤트 - 2',
      EVNT_TAG: undefined,
      BIZ_DS_CD: '',
      IS_USE_LNK: 'N',
      LNK_URL: '',
      START_DTTM: '20230301000000',
      END_DTTM: '20230413000000',
    },
    {
      EVNT_ID: '3',
      END_YN: 'N',
      BNFS_EXPU_YN: 'Y',
      ICON_FILE_NM: 'sample001.jpg',
      TTL_CND: 'TTL CND',
      TTL_BNFS: '기부 이벤트 - 3',
      EVNT_TAG: undefined,
      BIZ_DS_CD: '',
      IS_USE_LNK: 'N',
      LNK_URL: '',
      START_DTTM: '20230301000000',
      END_DTTM: '20230413000000',
    },
    {
      EVNT_ID: '4',
      END_YN: 'Y',
      BNFS_EXPU_YN: 'Y',
      ICON_FILE_NM: 'sample001.jpg',
      TTL_CND: 'TTL CND',
      TTL_BNFS: '기부 이벤트 - 4',
      EVNT_TAG: undefined,
      BIZ_DS_CD: '',
      IS_USE_LNK: 'N',
      LNK_URL: '',
      START_DTTM: '20230301000000',
      END_DTTM: '20230413000000',
    },
    {
      EVNT_ID: '5',
      END_YN: 'Y',
      BNFS_EXPU_YN: 'Y',
      ICON_FILE_NM: 'sample001.jpg',
      TTL_CND: 'TTL CND',
      TTL_BNFS: '기부 이벤트 - 5',
      EVNT_TAG: undefined,
      BIZ_DS_CD: '',
      IS_USE_LNK: 'N',
      LNK_URL: '',
      START_DTTM: '20230301000000',
      END_DTTM: '20230413000000',
    },
  ]

  res.status(200).json({
    events,
  })
}
