let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('Should generate correct message object', ()=>{
        let from = 'Jen';
        let text = 'Some message';
        let message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text });
    });
});

describe('generateLocationMessage', ()=>{
    it('Should generate correct location object', ()=>{
        let from = 'Jon';
        let lat = 1;
        let lng = 1;
        let url = 'https://www.google.com/maps?q=1,1';
        let msg = generateLocationMessage(from, lat, lng);

        expect(msg.from).toBe(from);
        expect(msg.createdAt).toBeA('number');
        expect(msg.url).toBe(url);
        expect(msg).toInclude({from, url });
    
    });
});