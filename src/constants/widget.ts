export const MNU_WGT_DICT = {
  FPMDPT130100: 'FPMDPT1300000100A',
  FPMDPT080000: 'FPMDPT0800000100A', // ?
} as const

type MNU_WGT_DICT_VALUE = keyof typeof MNU_WGT_DICT

export function getWgtId(menuId: MNU_WGT_DICT_VALUE) {
  return MNU_WGT_DICT[menuId]
}
