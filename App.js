import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context'
import { StackMenu } from './routes'
import { Provider as PaperProvider } from 'react-native-paper'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'
export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackMenu />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  )
}
