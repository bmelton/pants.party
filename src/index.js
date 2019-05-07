import ReactDOM from 'react-dom';
import './index.css';
import { makeMainRoutes } from './routes';
import dotenv from 'dotenv';
dotenv.config();

const routes = makeMainRoutes();

console.log(process.env);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
