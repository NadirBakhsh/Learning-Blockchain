import { Box, Container, Image } from '@chakra-ui/react'
import Head from 'next/head'
import ImageNext from 'next/image'

export default function Home() {
	return (
		<>
			<Head>
				<title>Panaverse</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				<Container maxW='100%' height={'100vh'} bg='#6224C1' position={'relative'} centerContent>
					<Box width={'100%'} background={'#6224C1'} position='absolute' zIndex={1}>
						<Image width={'100%'} src='/assets/images/topRoof.svg' alt='Dan Abramov' />
					</Box>
					<Box width={'800px'} height={154} top={[150]} position='absolute' zIndex={1}></Box>
					<Box
						width={'100%'}
						height={'100%'}
						position='absolute'
						zIndex={1}
						justifyContent='center'
						alignItems={['flex-start', 'center']}
						display={'flex'}>
						<ImageNext src='/assets/images/starts.svg' alt='Dan Abramov' fill />
					</Box>
					<Box
						width={'100%'}
						background={'#6224C1'}
						bottom={0}
						style={{ transform: 'rotate(180deg)' }}
						position='absolute'
						zIndex={1}>
						<Image width={'100%'} src='/assets/images/topRoof.svg' alt='Dan Abramov' />
					</Box>
					<Box bottom={0} right={{ lg: '50px' }} position='absolute' zIndex={4}>
						<Image src={'/assets/images/man.png'} alt='man' />
					</Box>
				</Container>
			</main>
		</>
	)
}
