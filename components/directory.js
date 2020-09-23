import React from 'react';
import * as FileSystem from 'expo-file-system';


export const picDir = FileSystem.cacheDirectory + 'picky/';

export async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(picDir)
    if (!dirInfo.exists) {
      console.log('Gif directory doesn\'t exist, creating...');
      await FileSystem.makeDirectoryAsync(picDir, { intermediates: true });
    }
};