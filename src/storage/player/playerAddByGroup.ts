import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO,  group: string) {
    
    try {
        const storagedPlayers = await playersGetByGroup(group);

        const playerAleadyExist = storagedPlayers.filter(player => player.name === newPlayer.name)

        if (playerAleadyExist.length > 0) {
            throw new AppError('Essa pessoas já está adicionada em um time.')
        }

        const storage = JSON.stringify([...storagedPlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
        
    } catch (error) {
        throw (error);
    }
}