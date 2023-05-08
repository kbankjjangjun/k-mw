export async function getCurating() {
  return fakeNetwork(
    [
      {
        FNCL_NM: '기분통장',
        MKT_DESC: '기분을 낭비하지 마세요',
        CRT_DESC: '새로워진 기분통장',
        IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/img_prod_home_cura_02.png`,
        EMG_FILE: '♥',
        BTN_NM: '바로가기',
        PD_BG_COLR: '#DBA5FF',
        MENU_ID: 'FPMDPT130100',
        LNK_VAL: 'SQRC=1',
        PD_SQN: 'ISBCRT300',
      },
      {
        FNCL_NM: '케이뱅크 HI Teen 카드',
        MKT_DESC: '자주 쓰는곳에서 편리하게',
        CRT_DESC: '',
        IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/img_prod_home_cura_01.png`,
        EMG_FILE: '',
        BTN_NM: '바로가기',
        PD_BG_COLR: '#DBA5FF',
        MENU_ID: 'FPMDPT130100',
        LNK_VAL: 'SQRC=1',
        PD_SQN: 'ISBCRT200',
      },
      {
        FNCL_NM: '기분 통장',
        MKT_DESC: '기분을 낭비하지 마세요',
        CRT_DESC: '새로워진 기분통장',
        IMG_FILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/img_prod_home_cura_03.png`,
        EMG_FILE: '♥',
        BTN_NM: '바로가기',
        PD_BG_COLR: '#DBA5FF',
        MENU_ID: 'FPMDPT130200',
        LNK_VAL: 'SQRC=1',
        PD_SQN: 'ISBCRT400',
      },
    ],
    2000
  )
}

function fakeNetwork(value: any, delay: number) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value)
    }, delay)
  })
}
