import { Card, Group, Badge, Button, Text, Flex } from '@mantine/core'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MusicPresentation } from '../lib/model/Music'
import { getMusicsObjects, getURLForMusic, getURLForMusics } from '../lib/services/musicService'
import AudioPlayer from 'react-h5-audio-player';
import { storage } from '../lib/firebase'
import { getDownloadURL, ref } from 'firebase/storage'
import 'react-h5-audio-player/lib/styles.css';

export default function List({ list, downloadUrl }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    console.log(list)


    return (
        <>
            {downloadUrl.map((element, key) => (

                <Card key={key} shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Flex
                            mih={'15vh'}

                            gap="xl"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Text weight={500}>{element.music.author}</Text>

                        </Flex>
                    </Card.Section>



                    <Text size="sm" color="dimmed">
                        {element.music.title}
                    </Text>

                    <AudioPlayer
                        src={element.downloadUrl}
                    />

                </Card>

            ))}

           
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {


    const list = await getMusicsObjects()
    const downloadUrl: MusicPresentation[] = await getURLForMusics(list)



    return {
        props: {
            list,
            downloadUrl
        }
    }
}