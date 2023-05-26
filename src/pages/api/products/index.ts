// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProductKey } from '@/types/product'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  tabs: IProductTab[]
  newBdg?: string[]
  curatings: ICurating[]
  populars: IPopular[]
  recommends: IRecommend[]
}

export interface IProductTab {
  CMN_CD_DTL_ID: ProductKey
  CMN_CD_ABRV_NM: string
  CMN_CD_NM: string
  isNew: boolean
}

export interface ICurating {
  fnclNm: string
  mktDesc: string
  crtDesc: string | null
  imgFile: string
  emgFile: string
  btnNm: string
  pdBgColr: string
  menuId: string
  lnkVal: string
  pdSqn: string
}

export interface IPopular {
  fnclNm: string
  mktDesc: string
  btnNm: string
  menuId: string
  lnkVal: string
  pdSqn: string
}

export interface IRecommend {
  expuStartDttm?: string
  //btnNm: string | null;
  pdSqn?: string
  menuId: string
  lnkVal?: string
  mwUseYn: string
  imgFile: string
  fnclNm: string
  mktDesc?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO: tabList에
  // res.status(200).json({
  //   tabs: [
  //     {
  //       CMN_CD_DTL_ID: '100',
  //       CMN_CD_NM: '예적금',
  //       CMN_CD_ABRV_NM: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/home_tab_01_dep.svg`,
  //       isNew: false,
  //     },
  //     {
  //       CMN_CD_DTL_ID: '200',
  //       CMN_CD_NM: '대출',
  //       CMN_CD_ABRV_NM: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/home_tab_02_loan.svg`,
  //       isNew: false,
  //     },
  //     {
  //       CMN_CD_DTL_ID: '300',
  //       CMN_CD_NM: '카드',
  //       CMN_CD_ABRV_NM: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/home_tab_03_card.svg`,
  //       isNew: false,
  //     },
  //     {
  //       CMN_CD_DTL_ID: '400',
  //       CMN_CD_NM: '제휴',
  //       CMN_CD_ABRV_NM: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/home_tab_04_coopera.svg`,
  //       isNew: true,
  //     },
  //     {
  //       CMN_CD_DTL_ID: '500',
  //       CMN_CD_NM: '보험',
  //       CMN_CD_ABRV_NM: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/home_tab_05_umb.svg`,
  //       isNew: true,
  //     },
  //   ],
  //   // newBdg: ["100", "300"],
  //   curatings: [
  //     {
  //       FNCL_NM: '기분통장',
  //       MKT_DESC: '기분을 낭비하지 마세요',
  //       CRT_DESC: '새로워진 기분통장',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/img_prod_home_cura_03.png`,
  //       EMG_FILE: '♥',
  //       BTN_NM: '바로가기',
  //       PD_BG_COLR: '#DBA5FF',
  //       MENU_ID: 'FPMDPT130100',
  //       LNK_VAL: 'SQRC=1',
  //       PD_SQN: 'ISBCRT300',
  //     },
  //     {
  //       FNCL_NM: '케이뱅크 HI Teen 카드',
  //       MKT_DESC: '자주 쓰는곳에서 편리하게',
  //       CRT_DESC: '',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/img_prod_home_cura_01.png`,
  //       EMG_FILE: '',
  //       BTN_NM: '바로가기',
  //       PD_BG_COLR: '#DBA5FF',
  //       MENU_ID: 'FPMDPT130100',
  //       LNK_VAL: 'SQRC=1',
  //       PD_SQN: 'ISBCRT200',
  //     },
  //     {
  //       FNCL_NM:
  //         '길이가 어느정도 도 길면어느정도 길면어느정도 길면어느정도 길면어느정',
  //       MKT_DESC:
  //         '길이가 어느정도 길면어느정도 길면어느정도 길면어느정도 길면어느정도 길면어느정도 길면',
  //       CRT_DESC: '길이가 어느정도 길면',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/img_prod_home_cura_03.png`,
  //       EMG_FILE: '♥',
  //       BTN_NM: '길이가 어느정도 길면',
  //       PD_BG_COLR: '#DBA5FF',
  //       MENU_ID: 'FPMDPT130200',
  //       LNK_VAL: 'SQRC=1',
  //       PD_SQN: 'ISBCRT400',
  //     },
  //   ],
  //   populars: [
  //     {
  //       FNCL_NM: '코드K 자유 적금',
  //       MKT_DESC: '코드로 우대받는 간편한 자유적금',
  //       BTN_NM: '적금 BEST',
  //       MENU_ID: 'FPMDPT130100',
  //       LNK_VAL: 'SQRC=1',
  //       PD_SQN: 'ISBCRT200',
  //     },
  //     {
  //       FNCL_NM: '케이뱅크 HI Teen 카드',
  //       MKT_DESC: '자주 쓰는곳에서 편리하게',
  //       BTN_NM: '바로가기',
  //       MENU_ID: 'FPMDPT130100',
  //       LNK_VAL: 'SQRC=1',
  //       PD_SQN: 'ISBCRT300',
  //     },
  //     {
  //       FNCL_NM: '테스트1',
  //       MKT_DESC: '테스트1 - MKT_DESC',
  //       BTN_NM: '오잉',
  //       MENU_ID: 'FPMDPT130101',
  //       LNK_VAL: 'SQRC=1',
  //       PD_SQN: 'ISBCRT400',
  //     },
  //   ],
  //   recommends: [
  //     {
  //       MENU_ID: 'PBKMAN000100',
  //       LNK_VAL: undefined,
  //       MW_USE_YN: 'Y',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/bim/ico_prod_home_wm_01.svg`, // TODO: 실제로는 url이 /resource/img/bim~ 형태로 온다
  //       FNCL_NM: '머니톡',
  //       MKT_DESC: '부자되는 모닝 루틴',
  //     },
  //     {
  //       MENU_ID: 'PBKINQ070000',
  //       LNK_VAL: undefined,
  //       MW_USE_YN: 'N',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/bim/ico_prod_home_wm_02.svg`,
  //       FNCL_NM: '내 신용관리',
  //       MKT_DESC: '내 신용점수 확인하기',
  //     },
  //     {
  //       MENU_ID: 'FPMINV040000',
  //       LNK_VAL: undefined,
  //       MW_USE_YN: 'N',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/bim/ico_prod_home_wm_03.svg`,
  //       FNCL_NM: '가상자산',
  //       MKT_DESC: '간편한 시세 조회',
  //     },
  //     {
  //       MENU_ID: 'ASTRES010000',
  //       LNK_VAL: undefined,
  //       MW_USE_YN: 'N',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/ico_prod_home_wm_04.svg`,
  //       FNCL_NM: '부동산',
  //       MKT_DESC: '부동산 자산 관리',
  //     },
  //     {
  //       MENU_ID: 'PBKMAN000400',
  //       LNK_VAL: undefined,
  //       MW_USE_YN: 'Y',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/ico_prod_home_wm_04.svg`,
  //       FNCL_NM: '금투자',
  //       MKT_DESC: undefined,
  //     },
  //     {
  //       MENU_ID: 'PBKMAN000400',
  //       LNK_VAL: undefined,
  //       MW_USE_YN: 'N',
  //       IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/ico_prod_home_wm_04.svg`,
  //       FNCL_NM: '테스트테스트테스트테스트테스트테스트테스트테스트테스트',
  //       MKT_DESC: '테스트테스트테스트테스트테스트테스트테스트테스트테스트',
  //     },
  //   ],
  // })
}
