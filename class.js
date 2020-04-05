const I = {
    blocks: [0x0f00, 0x2222, 0x00f0, 0x4444],
    color: "cyan"
};
const J = {
    blocks: [0x8e00, 0x6440, 0x0e20, 0x44c0],
    color: "blue"
};
const L = {
    blocks: [0x2e00, 0x4460, 0x0e80, 0xc440],
    color: "orange"
};
const O = {
    blocks: [0xcc00, 0xcc00, 0xcc00, 0xcc00],
    color: "yellow"
};
const S = {
    blocks: [0x6c00, 0x4620, 0x06c0, 0x8c40],
    color: "green"
};
const T = {
    blocks: [0x4e00, 0x4640, 0x0e40, 0x4c40],
    color: "purple"
};
const Z = {
    blocks: [0xc600, 0x2640, 0x0c60, 0x4c80],
    color: "red"
};
const tetrimos_list = [I, J, L, O, S, T, Z];
const board = {
    height: 24,
    width: 10,
    size: 25,
    arr: []
};

const rot_test_case = [
    [
        [0, 0],
        [-1, 0],
        [-1, -1],
        [0, 2],
        [-1, 2]
    ],
    [
        [0, 0],
        [-1, 0],
        [-1, 1],
        [0, -2],
        [-1, -2]
    ],
    [
        [0, 0],
        [1, 0],
        [1, -1],
        [0, 2],
        [1, 2]
    ],
    [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, -2],
        [1, -2]
    ]
];

const i_rot_test_case = [
    [
        [0, 0],
        [1, 0],
        [-2, 0],
        [1, -2],
        [-2, 1]
    ],
    [
        [0, 0],
        [-2, 0],
        [1, 0],
        [-2, -1],
        [1, 2]
    ],
    [
        [0, 0],
        [-1, 0],
        [2, 0],
        [-1, 2],
        [2, -1]
    ],
    [
        [0, 0],
        [2, 0],
        [-1, 0],
        [2, 1],
        [-1, -2]
    ]
];

const cont_rot_test_case = [
    [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, -2],
        [1, -2]
    ],
    [
        [0, 0],
        [1, 0],
        [1, -1],
        [0, 2],
        [1, 2]
    ],
    [
        [0, 0],
        [-1, 0],
        [-1, 1],
        [0, -2],
        [-1, -2]
    ],
    [
        [0, 0],
        [-1, 0],
        [-1, -1],
        [0, 2],
        [-1, 2]
    ]
];

const cont_i_rot_test_case = [
    [
        [0, 0],
        [-1, 0],
        [2, 0],
        [-1, 2],
        [2, -1]
    ],
    [
        [0, 0],
        [2, 0],
        [-1, 0],
        [2, 1],
        [-1, -2]
    ],
    [
        [0, 0],
        [1, 0],
        [-2, 0],
        [1, -2],
        [-2, 1]
    ],
    [
        [0, 0],
        [-2, 0],
        [1, 0],
        [-2, -1],
        [1, 2]
    ]
];