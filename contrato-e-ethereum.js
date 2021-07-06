async function getOrderContractData() {
  let contractNumberField = document.getElementById("contractNumber");
  const userInput = contractNumberField.value * 1;
  alert("valorInformadoPeloUsuario: " + userInput);
  try {
    const arrayOrderData = await smartContract.pedidos(userInput);
    console.log(arrayOrderData);
    //Modo mais verboso
    let showComprador = document.getElementById("comprador");
    showComprador.innerText = arrayOrderData[0];
    //Modo sintetico onde se concatena um comando junto a outro na mesma linha
    document.getElementById("cor").innerText = arrayOrderData[1];
    document.getElementById("tamanho").innerText = arrayOrderData[2];
    document.getElementById("endereco").innerText = arrayOrderData[3];
  } catch (err) {
    console.error(err);
    document.getElementById("comprador").innerText = "";
    document.getElementById("cor").innerText = "";
    document.getElementById("tamanho").innerText = "";
    document.getElementById("endereco").innerText = "";
    contractNumberField.value = 0;
    alert("Houve um erro ao buscar o pedido de numero: " + userInput);
  }
}

async function autoLoadOwner() {
  try {
    const contractOwner = await smartContract.owner();
    console.log(contractOwner);
    document.getElementById("spanOwner").innerText = contractOwner;
  } catch (err) {
    console.error(err);
    alert("Houve um erro ao buscar o proprietário do contrato");
  }
}

async function saveFormData() {
  try {
    var tx;
    var txReceipt;
    tx = await smartContractWithSigner.registerOrder(
      document.frmCamiseta.paramComprador.value,
      document.frmCamiseta.paramCor.value,
      document.frmCamiseta.paramTamanho.value,
      document.frmCamiseta.paramEndereco.value
    );
    console.log("transacao enviada ao metamask. pendente...", tx);
    alert("Transação enviada... " + tx.hash + " aguarde a confirmação da Blockcnain...");
    txReceipt = await tx.wait();
    console.log("transacao processada...", txReceipt);
    if (txReceipt.status == 1) {
      alert("Transação processada: " + tx.hash + "  - Registro salvo na Blockchain. Status: " + txReceipt.status);
    } else {
      alert("Transação processada: " + tx.hash + "  - Mas houve um erro na blockchain. Veja pelo etherscan");
    }
  } catch (err) {
    console.error(err);
    alert("Houve um erro ao salvar o registro do pedido");
  }
}