const contractAddress = "0x7b1870acD7c8A2BaEE1Fe97C1c7BCEaE3a93d679";
var smartContract;
var smartContractWithSigner;
//Both ways are valid
//const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"paramLocator","type":"string"},{"internalType":"string","name":"paramRenter","type":"string"},{"internalType":"string","name":"paramAddressHome","type":"string"},{"internalType":"uint256","name":"paramRentalValue","type":"uint256"}],"name":"registerRental","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rentals","outputs":[{"internalType":"string","name":"locator","type":"string"},{"internalType":"string","name":"renter","type":"string"},{"internalType":"string","name":"addressHome","type":"string"},{"internalType":"uint256","name":"rentalValue","type":"uint256"}],"stateMutability":"view","type":"function"}];
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "emissario",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "saldo",
				"type": "uint256"
			}
		],
		"name": "deposito",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantidade",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "saldo",
				"type": "uint256"
			}
		],
		"name": "retirada",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "destinatario",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantidade",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "saldo",
				"type": "uint256"
			}
		],
		"name": "transferencia",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valorPelaCor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "percentualPeloTamanho",
				"type": "uint256"
			}
		],
		"name": "calcularValorDaCamiseta",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "valorDaCamiseta",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositar",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pedido",
		"outputs": [
			{
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tamanho",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "endereco",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "paramComprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramCor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramTamanho",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramEndereco",
				"type": "string"
			}
		],
		"name": "registrarCompra",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quantidade",
				"type": "uint256"
			}
		],
		"name": "retirar",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_destinatario",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_quantidade",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vendedor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "categoriaTamanho",
				"type": "uint256"
			}
		],
		"name": "verificarPercentualPeloTamanho",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "percentualPelTamanho",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verificarSaldo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "categoriaDaCor",
				"type": "uint256"
			}
		],
		"name": "verificarValorPelaCor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "valorPelaCor",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];