import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())

app.use(routes)
app.use('/', express.static(path.join(__dirname, 'public')))

export default app
