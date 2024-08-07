import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storedGroup = await groupGetAll();

        const filtered = storedGroup.filter(group => group !== groupDeleted);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filtered));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);

    } catch (error) {
        throw error;
    }
}