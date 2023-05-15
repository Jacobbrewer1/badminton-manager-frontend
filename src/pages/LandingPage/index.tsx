
import Box from '@mui/system/Box'
import ToolBar from './components'

export default function LandingPage() {


    return (
      <>
       <ToolBar></ToolBar>
       
        <Box
          component="img"
          sx={{

            width: '100%',
            
          }}
          alt="landing page background"
          src="/public/main.jpg"
        />

        
      </>
    )
}