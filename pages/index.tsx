import { Badge, Button, Card, FileInput, Flex, Group, Text, TextInput } from '@mantine/core'
import { IconUpload } from '@tabler/icons';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { uploadFiletoStorage, writeMusictoDatabase } from '../lib/services/musicService';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [file, setfile] = useState<File | null>(null)

  const [authorName, setauthorName] = useState('')
  const [title, setTitle] = useState('')

  const sendMusic = () =>{

    if(file){

      let music = writeMusictoDatabase(authorName,title)
      uploadFiletoStorage(file!,music.id)
      
    }


  }



  return (


    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Text weight={500}>Music Form</Text>
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <TextInput placeholder='Author Name' label='Author Name' onChange={(event)=> setauthorName(event.currentTarget.value)} />

        <TextInput placeholder='Song Title' label= 'Song Title' onChange={(event)=> setTitle(event.currentTarget.value)} />

        <FileInput accept='audio/mpeg,audio/mp3' label="Song" placeholder="Song" icon={<IconUpload size={14} />} onChange={setfile}/>

       

        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={sendMusic}>
          Book classic tour now
        </Button>
      </Card>
     
    </>


  )
}
