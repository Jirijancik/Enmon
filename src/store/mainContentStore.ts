import create from 'zustand/vanilla'
import { IMeterRecord, mainContentService } from '../services/mainContentService'

type AuthState = {
    metersRecords: IMeterRecord[],
    fetchMetersRecords: () => void
}

export const mainContentStore = create<AuthState>((set) => ({   
    metersRecords: [],
    fetchMetersRecords: async () => {
        const response = await (await mainContentService.getMetersData())
        set({ metersRecords: await response.result })
    }
}))