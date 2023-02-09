# React Hook Dasar

## Membuat state pada class component

    todo:
        1.  src/pages/Home.js
            import dan pasang Hitung components
        2.  src/index.js
            import dan pasang Home
        3.  src/component/Hitung.js
        4.  jalankan server : npm start

## Membuat state pada function component (Hook)

    todo:

        1.  src/component/Hitung.js
            membuat function component
        2.  jalankan server : npm start

## Rapihkan folder

    todo:
        1.  folder component dan pages pindahkan kedalam folder 1BelajarUseState
        2.  src/index.js arahkan import Hitung ke dalam path baru yang berada didalam folder 1BelajarUseState

## useEffect

    todo:

        1.  src/index.js
            import dan pasang BelajarUseEffect
        2.  src/2BelajarUseEffect/index.js
            import dan pasang LifeCycle
        3.  src/2BelajarUseEffect/LifeCycle.js
            - buat class component
            - buat contructor
            - pasang componentDidMounth()
            - fecth fake api didalam componentDidMounth()
            - tampilkan satu nama

        1.  fake api : json place holder
            link: https://jsonplaceholder.typicode.com/

## update data dengan componentDidUpdate()

    todo:

        1.  src/2BelajarUseState/LifeCycle
            - buat form didalamnya buat satu input dan button
                pada input pasang event onChange() untuk  menampung value dan mencetak langsung dari inputan
                pada form pasang method onSubmit() dan pasang method handleSubmit()
            - buat function handleSubmit()
                copy code untuk update api pada jsonplaceholder pasterkan didalam handleSubmit()
            - componentDidMounth()
                tambahkan property isUpdate:false
            - pasang componentDidUpdate()
                buat kondisi jika data berhasil di update akan menampilkan alert sukses
                tampung state kedalam isUpdate

## penggunaan componentWillUnmount()

    todo:

        1.  src/2BelajarUseState/LifeCycle.js
            memasang componentWillUnmount()
        2   src/2BelajarUseState/index.js
            - memasang constructor
            - deklarasi isHide
            - memasang button untuk menampilkan content dan menyembunyikan content
        3.  pengujian pada browser:
            - klik button sembunyikan , maka content akan menghilang
            - klik button tampilkan, maka content akan tampil kembali

## memasang componentDidMount dengan menggunakan useEffect()

    todo:

        1.  src/2BelajarUseState/LifeCycleFunc.js
            - rfce : react functional component export
            - membuat state
            - membuat componentDidMount menggunakan useEffect
            - didalam useEffect panggil get api dari fake api: jsonplaceholeder
            - tampilkan satu data nama
