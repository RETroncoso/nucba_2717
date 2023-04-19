import React from 'react'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import { TabStyled } from './Estilos'

const EjemploChakra = () => {
  return (
    <div  
        style={{width:"95vw"}}
    >
        <Tabs style={{border: "1px solid blue"}}  size='md'  >
        <TabList mb='3em' style={{width:"85vw"}} >
            <Tab
                style={{width:"100%"}}
            >1</Tab>
            <TabStyled>2</TabStyled>
            <Tab>3</Tab>
            <Tab>4</Tab>
            <Tab>5</Tab>
            <Tab>6</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>Hola! Soy el panel numero 1</TabPanel>
            <TabPanel>Hola! Soy el panel numero 2</TabPanel>
            <TabPanel>Hola! Soy el panel numero 3</TabPanel>
            <TabPanel>Hola! Soy el panel numero 4</TabPanel>
            <TabPanel>Hola! Soy el panel numero 5</TabPanel>
            <TabPanel>Hola! Soy el panel numero 6</TabPanel>
        </TabPanels>
    </Tabs>
    </div>
        

    
  )
}

export default EjemploChakra