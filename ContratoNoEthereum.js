const contractAddress = "0x7b1870acD7c8A2BaEE1Fe97C1c7BCEaE3a93d679";
var smartContract;
var smartContractWithSigner;
//Both ways are valid
//const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"paramLocator","type":"string"},{"internalType":"string","name":"paramRenter","type":"string"},{"internalType":"string","name":"paramAddressHome","type":"string"},{"internalType":"uint256","name":"paramRentalValue","type":"uint256"}],"name":"registerRental","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rentals","outputs":[{"internalType":"string","name":"locator","type":"string"},{"internalType":"string","name":"renter","type":"string"},{"internalType":"string","name":"addressHome","type":"string"},{"internalType":"uint256","name":"rentalValue","type":"uint256"}],"stateMutability":"view","type":"function"}];
const ABI = [
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
		"name": "registerOrder",
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
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"name": "rentals",
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
	}
];