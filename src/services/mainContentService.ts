import { httpService, DATA_PATH } from './httpService';

const URL = `${DATA_PATH}/api`;

export interface IMetersData {
  result: IMeterRecord[],
  count: number
}

export interface IMeterRecord {
  createdAt: string
  id: string
  name: string
  pulses: number
  recordType: string
  serial: string
  unit: string
}

export const mainContentService = {
  async getMetersData(): Promise<IMetersData> {
    return (await httpService.get(`${URL}/meters`)).data;
  },
};
