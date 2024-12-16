export enum shiftTobOutStatusEnum {
  REQUEST = 'Request',
  SUBMIT = 'Submit',
  APPROVE = 'Di Setujui',
  REJECT = 'Di Tolak',
}

export enum DeliveryTypeEnum {
  BRI = 'BRI',
  EXPEDITION = 'Expedition',
}

export enum StepTobEnum {
  TO1='periksa_dokumen',
  TO2='form_bast',
  TO3='form_pengiriman',
  TO4='konfirmasi',
}

export enum transferBranchStatusEnum{
  M0 = 'Menunggu Proses',
  M1 = 'Menunggu Approval',
  A0 = 'Approval Ditolak',
  A1 = 'Sedang Dikirim',
  D1 = 'Diterima dan Diproses',
  T0 = 'TOB Ditolak',
  T1 = 'TOB Diterima'
}


