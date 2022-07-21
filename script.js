const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text: 'This was so great I really loved the place, such a great experience and I love Lucy she did my toes super mcduper flabbergasting well!!!'
    },
    {
        name: 'June Cha',
        position: 'Softwere Engr',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'WOOOW my nails are shining after this, not only did they do my nails they did my hair VEEERRRYYY WELLLL WOOOOO!!!! '
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 'The manicurist did not cure my Manicure!?!?! What was this all about then!! Very bad place to do your Manicure '
    },
    {
        name: 'Jhonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'I asked for a bowl cut, but they forgot to use a bowl!!! THis is inadequate from such proffesionals. '
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text: 'I asked for eyebrow threading, they did an amazing job overall i Enjoyed it staff were very welcoming Great!' 
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text: 'The ladies working at the salon kept giggling when I tooted! Very unproffessional and NOT LADY LIKE!!!'
    }
]

let idx = 1

function upadteTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(upadteTestimonial, 10000)
