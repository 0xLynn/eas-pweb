const payload = require('payload')

/** @type {import('payload/types').CollectionConfig} */

const Logs = {
    slug: 'Peserta',
    admin: {
        useAsTitle: 'name'
    },

fields: [
    {
        name: 'nama',
        label: 'Nama',
        type: 'text',
        required: true
    },
    {
        name: 'email',
        type: 'text',
        required: true,
        unique: true
    },
    {
        name: "sekolah",
        type: "text",
        required: true
    },
    {
        name: "status",
        type: "select",
        options: [
            {label: 'Waiting', value: 'waiting'},
            {label: 'Rejected', value: 'rejected'},
            {label: 'Accepted', value: 'accepted'}
        ],
        required: true
    },
    {
        name: "timestamp",
        type: "date",
        required: true
    }
  ],
};

export default Logs