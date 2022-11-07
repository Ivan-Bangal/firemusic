import { child, get, ref, set } from "firebase/database";
import { getDownloadURL, listAll, ref as storageRef, uploadBytes } from "firebase/storage";
import { database, storage } from "../firebase";
import { Music, MusicPresentation } from "../model/Music";
import { v4 as uuidv4 } from 'uuid';
import { Console } from "console";

export async function getMusicsObjects() {

    const databaseRef = ref(database)

    let musicList: Music[] = []

    await get(child(databaseRef, 'music/')).then((snapshot) => {
        if (snapshot.exists()) {

            snapshot.forEach((child) => {
                musicList.push(child.val());
            })

        }
    })

    return musicList;

}

export async function getURLForMusic(id: string) {


    var downloadUrl = ''
    const reference = storageRef(storage, 'music/' + id)

    await getDownloadURL(reference).then((url: string) => {
        downloadUrl = url
    })


    return downloadUrl;

}

export async function getURLForMusics(musics: Music[]) {

    console.log('Execute Method')

    const downloadUrlList: MusicPresentation[] = []

     

    for (let index = 0; index < musics.length; index++) {
        const element = musics[index];

        const reference = storageRef(storage, 'music/' + element.id)

        await getDownloadURL(reference).then((url: string) => {
            downloadUrlList.push(
                {
                    downloadUrl: url,
                    music: element
                }
            )
        })
    }






    console.log(downloadUrlList)

    return downloadUrlList;

}


export function writeMusictoDatabase(author: string, title: string) {

    console.log('Method WriteMusic executed');
    

    let music: Music = {
        author: author,
        title: title,
        id: '' + uuidv4()
    }

    set(ref(database, 'music/' + music.id), music)

    return music;
}

export function uploadFiletoStorage(file: File, id: string) {

    console.log('Method uploadFiletoStorage executed');

    const storageReference = storageRef(storage, 'music/' + id)

    return uploadBytes(storageReference, file).then((snapshot) => {
        console.log('File Uploaded')
    })
}