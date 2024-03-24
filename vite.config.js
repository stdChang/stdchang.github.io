import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/'
  //set base even though base is defaulted, 
  //for future ref, this is the homepage or domain i guess
})
