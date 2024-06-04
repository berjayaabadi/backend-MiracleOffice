/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import bodyParser from 'body-parser';
import {SupabaseClient, createClient} from '@supabase/supabase-js'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const supabase = createClient('https://dnktnvncjdkdglxqfbun.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRua3Rudm5jamRrZGdseHFmYnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MDgwMTYsImV4cCI6MjAzMjk4NDAxNn0.7oZl2dzezuWnHB1NaKcXkRDkGP3LL7Rq1EOvnXMQjFs')

app.get('/', (req, res) => {
    res.send("Hello I am working my friend Supabase <3");
});

app.get('/users', async (req, res) => {
    const {data, error} = await supabase
        .from('users')
        .select()
    res.send(data);
});


app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});


// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
