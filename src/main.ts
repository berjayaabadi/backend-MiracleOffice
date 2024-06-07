/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import bodyParser from 'body-parser';
import {SupabaseClient, createClient} from '@supabase/supabase-js'
import cors from 'cors';
import { NotFoundException } from '@nestjs/common';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const supabase = createClient('https://dnktnvncjdkdglxqfbun.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRua3Rudm5jamRrZGdseHFmYnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MDgwMTYsImV4cCI6MjAzMjk4NDAxNn0.7oZl2dzezuWnHB1NaKcXkRDkGP3LL7Rq1EOvnXMQjFs')

app.get('/', (req, res) => {
    res.send("Hello I am working my friend Supabase <3 ssss");
});

// app.get('/users', async (req, res) => {
//     const {data, error} = await supabase
//         .from('users')
//         .select()
//     res.send(data);
// });

app.post('/users', async (req, res) => {
    const email = req.body.email; 
    const password = req.body.password; 
    const { data, error } = await supabase
    .from('users')
    .select('user_id')
    .eq("user_name", email)
    .eq("user_passwd", password);

    if(data.length == 0) {
        res.send('0');
    } else {
         //res.send(data);
          res.send('1');
    }
    
});


app.listen(8080, () => {
    console.log(`> Ready on http://localhost:8080`);
});


// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
