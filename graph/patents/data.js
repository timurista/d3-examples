const patents = [
  {
    id: "US-2017243193-A1",
    title: "Hybrid blockchain",
    abstract:
      "This disclosure describes a hybrid of blockchain with other information management systems to provide validation for documents, transaction state and performance against contracts. A blockchain document hybrid allows portions of versioned documents to be shared without revealing full document content. For transaction and contract state a confidential Shared Data Structure (SDS) is combined with a publicly viewable blockchain to record the terms of a trade transaction, starting from as early as a purchase order. Out of these building blocks we present designs for commerce systems that can automatically execute the flow of money based upon signals resulting from the flow of goods. Besides reducing processing costs through automation, these designs open up avenues for innovations such as a Data LC, Blockchain Based Obligation (BBO), Deep Tier Financing, and Cash Flow Scrips.",
    country: "US",
    publicationDate: "2017-08-24T00:00:00.000Z",
    filingDate: "2016-07-15T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170243193A1",
    relevancyScore: 934.635
  },
  {
    id: "WO-2018104276-A1",
    title: "Master blockchain",
    abstract:
      "The invention relates to a method of tamper-resistant storage of data in a first block chain (210) a plurality of block chains using a network system (100).  The network system (100) comprises a plurality of slave subnetworks (102, 104), wherein each subordinate sub-network (102, 104) (210) of the plurality is assigned to block Chains one of the block chains, and wherein each subordinate sub-network (102, 104) includes a plurality comprises of data processing units.  The data processing units form nodes (110, 112, 114) of the corresponding sub-sub-network (102, 104).  The network system (100) further includes a higher-level subnetwork (106), wherein the parent sub-network (106) a higher-level master block chain (230) is associated, and wherein the parent sub-network (106) at least one selected node (112, 114) from each subordinate sub-network (102, 104) of the plurality of slave subnetworks (102, 104).  The method comprising:    • performing a first validity test of a first additional block by the first child sub-network (104)    • to a positive result of the first validity check out, executing a second validation of the first additional block by the parent sub-network (106)    • to a positive result of the second validity check out adding the first additional block to the master block chain (230) and released for adding the first additional block to the first block chain (210).",
    country: "WO",
    publicationDate: "2018-06-21T00:00:00.000Z",
    filingDate: "2017-12-05T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018104276A1",
    relevancyScore: 867.875
  },
  {
    id: "WO-2017202759-A1",
    title: "Wrapped-up blockchain",
    abstract:
      "A system includes circuitry for wrapping up blockchains into blockchain loops. A blockchain may include a series of blocks extending from an initial block to a terminal block. The circuitry may wrap-up the blockchain by storing an integrity output coding-consistent with the terminal block within the initial block. In some cases, when the terminal block and initial block include end blocks for the blockchain, wrapping-up the series may form a closed-loop.",
    country: "WO",
    publicationDate: "2018-05-08T00:00:00.000Z",
    filingDate: "2017-10-05T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2017202759A1",
    relevancyScore: 863.634
  },
  {
    id: "US-2017177898-A1",
    title: "Personal ledger blockchain",
    abstract:
      "A system, method, and computer readable storage medium configured for storing encrypted data in a blockchain. To write additional data in a blockchain, a request is received at a computing node. The request is typically cryptographically signed by a user system to include a new transaction with additional data in the blockchain. The additional data is previously encrypted with an encryption key. A new block that records the new transaction with additional data in the blockchain is added. To read the additional data in a blockchain, a request is received at a computing node with a transaction identifier and a decryption key from a user system to access data journaled as part of the blockchain in the transaction database. The transaction database is searched using the identifier. In response, to finding the corresponding block in the blockchain, the data is decrypted using the decryption key.",
    country: "US",
    publicationDate: "2018-07-03T00:00:00.000Z",
    filingDate: "2015-12-16T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170177898A1",
    relevancyScore: 681.828
  },
  {
    id: "WO-2017136527-A1",
    title: "Blockchain-enhanced database",
    abstract:
      "A blockchain processor may be coupled to a database. The blockchain processor may accept data for entry into the database. The blockchain processor may hash a first previously entered data block stored in the database at a first row address. The blockchain processor may combine the accepted data, the hash of the first previously entered data block, and an address of the previously entered data block into a new data block. The blockchain processor may store the new data block in the database.",
    country: "WO",
    publicationDate: "2017-08-10T00:00:00.000Z",
    filingDate: "2017-02-02T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2017136527A1",
    relevancyScore: 675.653
  },
  {
    id: "US-2018113752-A1",
    title: "Inter-ledger messaging in a blockchain",
    abstract:
      "Operating conditions of a blockchain configuration may be dynamic and change automatically under certain circumstances. One example method of operation may include receiving a blockchain transaction sent from a first blockchain to a second blockchain, identifying an inter-ledger contract between the first blockchain and the second blockchain, receiving an inter-ledger message at the second blockchain from the first blockchain, and determining whether to log the blockchain transaction in the first blockchain or the second blockchain based on the inter-ledger message.",
    country: "US",
    publicationDate: "2018-04-26T00:00:00.000Z",
    filingDate: "2016-10-20T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180113752A1",
    relevancyScore: 671.988
  },
  {
    id: "US-2018165476-A1",
    title: "Interlocked blockchains to increase blockchain security",
    abstract:
      "Systems and methods for preventing vulnerabilities in a blockchain due to quiescence are disclosed including submitting a first crosslink transaction for addition to a first blockchain that includes cross-referencing information for a second crosslink transaction that corresponds to the first crosslink transaction and submitting the second crosslink transaction for addition to a second blockchain that includes cross-referencing information corresponding to the first crosslink transaction. The first and second crosslink transactions are configured to be usable together by a user of at least one of the first and second blockchains to validate at least a portion of one of the first and second blockchains after a period of quiescence in the one of the first and second blockchains.",
    country: "US",
    publicationDate: "2018-06-14T00:00:00.000Z",
    filingDate: "2016-12-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180165476A1",
    relevancyScore: 648.986
  },
  {
    id: "GB-2540975-A",
    title: "Mitigating blockchain attack",
    abstract:
      "Detecting malicious events occurring with respect to a blockchain data structure. A transaction creation profile is defined 402 according to which transactions can be generated and submitted to the blockchain 404. Submitting a profile generation transaction to the blockchain which, when validated, results in the generation of a profiler data structure in the blockchain including executable code to generate profile transactions to be submitted to the blockchain according to the transaction creation profile. The profile transactions may be generated by the profiler according to the rules in the transaction creation profile. The blockchain is monitored 406 to identify profile transactions and identified profile transactions are compared with the transaction creation profile 408 to detect a deviation from the transaction creation profile. Such detection corresponds to a malicious event 410 occurring with respect to the blockchain. Triggering of the execution of the profiler may be periodically or based on state or size of the blockchain.",
    country: "GB",
    publicationDate: "2017-02-08T00:00:00.000Z",
    filingDate: "2015-07-31T00:00:00.000Z",
    url: "https://patents.google.com/patent/GB2540975A",
    relevancyScore: 639.442
  },
  {
    id: "CN-107958371-A",
    title: "Distributed blockchain identity card",
    abstract:
      "The invention discloses a distributed blockchain identity card, which comprises a blockchain identity card creating process and a blockchain identity card data relationship and blockchain identity card promotion business credit process. The first account of a blockchain is named as a blockchain creating account. The blockchain identity card data creating process comprises a user A, a user B and auser C; the user A puts forward an application from the blockchain creating account; after the blockchain creating account passes the information of the user A, a blockchain account is created for theuser A on the blockchain through the own account; the user B creates the blockchain identity card of the same type; the user B creates the blockchain identity card for the user C and transfers the credit endorsement of the user B to the user C; and finally, the blockchain identity card transfers the distributed credit to the user C to create the blockchain identity card, wherein the blockchain identity card comprises an external part and a card body (which includes a CPU (Central Processing Unit) card or a M1 card). By use of the identity card, data safety is guaranteed, and the reliability of blockchain information is improved.",
    country: "CN",
    publicationDate: "2018-04-24T00:00:00.000Z",
    filingDate: "2017-11-13T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107958371A",
    relevancyScore: 612.92
  },
  {
    id: "WO-2018045057-A1",
    title: "Massively scalable blockchain ledger",
    abstract:
      "A massively scalable blockchain ledger without scalability issue on each blockchain node and the blockchain ledger itself by partitioning the full value range of the cryptographic hash of the blockchain blocks into a configurable but large number of block buckets and auto-assign and auto-adjust these buckets roughly evenly amongst reliable blockchain mining nodes.",
    country: "WO",
    publicationDate: "2018-03-08T00:00:00.000Z",
    filingDate: "2017-08-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018045057A1",
    relevancyScore: 611.385
  },
  {
    id: "US-2018218003-A1",
    title: "Ephemeral blockchain data structure",
    abstract:
      "Multiple blockchains have block data strictures with different event granularities. A first blockchain adds blocks according to a data structure with high event granularity. A second blockchain adds a block digest according to a data structure with low event granularity. The block digest is a digest of the blocks added to the first blockchain.",
    country: "US",
    publicationDate: "2018-08-02T00:00:00.000Z",
    filingDate: "2017-01-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180218003A1",
    relevancyScore: 592.599
  },
  {
    id: "GB-2559592-A",
    title: "Blockchain (ML) Technology",
    abstract:
      "Blockchain is a distributed financial data structure ledger engine. It allows peer-to-peer electronic currency transactions and data mining as sets of codes that represent e-currency. The system creates a hash value for a prior transaction, and combines the hash value, transaction data and the public key of a transaction. It mines data and formats it with a hash-based proof-of-work mechanism with an algorithm that makes combinations of digits to form a digital code that represents e-currency. It broadcasts the data or transaction codes to peers with a time-stamp, assists a subset of peers to collect electronic codes to form a transaction block, and helps each participant in the subset to create a solution to a proof-of-work problem for its transaction block. It manages all participants in the subset, broadcasting their transaction blocks and the solution to all participants. It obtains a valid consensus that a transaction block is valid, and accepts and adds that transaction block to the existing chain of blocks. It manages the digital wallet and helps peers to make transactions over the Internet or telecommunication channels. It keeps the data in its ledger permanently for verification.",
    country: "GB",
    publicationDate: "2018-08-15T00:00:00.000Z",
    filingDate: "2017-02-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/GB2559592A",
    relevancyScore: 579.69
  },
  {
    id: "US-2018247320-A1",
    title: "Blockchain consumer ledger",
    abstract:
      "Disclosed herein are systems and methods for interacting with a consumer ledger. The systems and methods include: receiving a copy of the consumer ledger from one of a plurality of miners; adding a transaction to the consumer ledger; and transmitting the consumer ledger to the plurality of miners for conformation.",
    country: "US",
    publicationDate: "2018-08-30T00:00:00.000Z",
    filingDate: "2017-02-27T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180247320A1",
    relevancyScore: 567.457
  },
  {
    id: "US-2018241565-A1",
    title: "Secret Sharing via Blockchains",
    abstract:
      "Confidential, secret data may be shared via one or more blockchains. Mortgage applications, medical records, financial records, and other electronic documents often contain social security numbers, names, addresses, account information, and other personal data. A secret sharing algorithm is applied to any secret data to generate shares. The shares may then be integrated or written to one or more blockchains for distribution.",
    country: "US",
    publicationDate: "2018-08-23T00:00:00.000Z",
    filingDate: "2017-02-17T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180241565A1",
    relevancyScore: 560.739
  },
  {
    id: "US-2018219685-A1",
    title: "Validating Documents via Blockchain",
    abstract:
      "Authentication of electronic document is based on multiple digital signatures incorporated into a blockchain. Structured data, metadata, and instructions may be hashed to generate the multiple digital signatures for distribution via the blockchain. Any peer receiving the blockchain may then verify an authenticity of an electronic document based on any one or more of the multiple digital signatures incorporated into the blockchain.",
    country: "US",
    publicationDate: "2018-08-02T00:00:00.000Z",
    filingDate: "2017-01-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180219685A1",
    relevancyScore: 557.52
  },
  {
    id: "US-2018189528-A1",
    title: "Tracking assets with a blockchain",
    abstract:
      "A blockchain of transactions may be referenced for various purposes and may be later accessed by interested parties for ledger verification. One example method of operation may include reading a tag affixed to an asset, transmitting a request to update an asset status of the asset in a blockchain, receiving validation confirmation based on content of the request, and updating the asset status of the asset in the blockchain.",
    country: "US",
    publicationDate: "2018-07-05T00:00:00.000Z",
    filingDate: "2017-01-05T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180189528A1",
    relevancyScore: 550.744
  },
  {
    id: "US-2018219669-A1",
    title: "Blockchain hash value recomputation",
    abstract:
      "A blockchain includes blocks that each store a hash value computed using a hash function from data of the block. Another hash value is computed for each block using a different hash function, and added to the block within the blockchain. New blocks subsequently added to the blockchain have hash values computed using just the different hash function.",
    country: "US",
    publicationDate: "2018-08-02T00:00:00.000Z",
    filingDate: "2017-01-27T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180219669A1",
    relevancyScore: 547.641
  },
  {
    id: "CN-107733855-A",
    title:
      "Blockchain system capable of simultaneously supporting public blockchain, consortium blockchain and private blockchain and application method",
    abstract:
      "The invention provides a blockchain system capable of simultaneously supporting a public blockchain, a consortium blockchain and a private blockchain, which comprises a plurality of nodes connected bya P2P network. The nodes complete reading and writing on data of a blockchain together; the blockchain is formed by a Genesis block and a series of other blocks with the same data structure through ahash value link; the Genesis block comprises a special field; the special field comprises a blockchain type identifier, a blockchain ID, a pre-selected node, a consensus mechanism, a reading rule anda data reading contract; the nodes comprise the pre-selected node and subsequently added nodes; the pre-selected node has a write permission and is used for determining whether new nodes added into consortium blockchain and private blockchain instances have a read permission and providing basis for the nodes with the read permission to acquire the write permission; and modules for node operationcomprise a P2P communication module, a data storage module, an identity management module, a password tool module and a consensus mechanism module.",
    country: "CN",
    publicationDate: "2018-02-23T00:00:00.000Z",
    filingDate: "2017-08-31T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107733855A",
    relevancyScore: 547.63
  },
  {
    id: "WO-2018087836-A1",
    title: "Blockchain transaction system and blockchain transaction method",
    abstract:
      "[Problem] To enable, at low cost, provision of a secure financial service through a transaction terminal such as an ATM. [Solution] A blockchain transaction system 10 is configured to include at least one predetermined device which is among devices for executing a series of transactions concerning a financial transaction and which executes a predetermined transaction when achieving a consensus in a blockchain concerning a transaction at another one of the devices.",
    country: "WO",
    publicationDate: "2018-05-17T00:00:00.000Z",
    filingDate: "2016-11-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018087836A1",
    relevancyScore: 531.428
  },
  {
    id: "US-2018248880-A1",
    title: "Permissions using blockchain",
    abstract:
      "A network device receives a smart contract for permissions to access a service, wherein the smart contract is in an initial block for authorizations in a shared ledger. The network device receives, from an authorization server device, an update to the shared ledger, wherein the update is a proposed block in the shared ledger requiring validation. The network device stores, in a local memory, a copy of the shared ledger with the update, when the update is validated by the distributed consensus network. The network device receives, from a client device, an item request for an item associated with the service, wherein the item request includes a client identifier. The network device identifies if there is match of the client identifier and the item in the copy of the shared ledger and sends, to the client device, the item when there is match of the client identifier and the item.",
    country: "US",
    publicationDate: "2018-08-30T00:00:00.000Z",
    filingDate: "2017-02-24T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180248880A1",
    relevancyScore: 526.924
  },
  {
    id: "US-9807106-B2",
    title: "Mitigating blockchain attack",
    abstract:
      "Disclosed is mitigating block chain attack. A computer implemented method for detecting malicious events occurring with respect to a block chain data structure comprising: defining a transaction creation profile according to which transactions can be generated and submitted to the block chain; submitting a transaction to the block chain, the transaction causing the generation of a profiler data structure in the block chain including executable code to generate profile transactions to be submitted to the block chain according to the transaction creation profile; monitoring the block chain to identify profile transactions; and comparing identified profile transactions with the transaction creation profile to detect a deviation from the transaction creation profile, such detection corresponding to a malicious event occurring with respect to the block chain.",
    country: "US",
    publicationDate: "2017-10-31T00:00:00.000Z",
    filingDate: "2016-07-29T00:00:00.000Z",
    url: "https://patents.google.com/patent/US9807106B2",
    relevancyScore: 526.924
  },
  {
    id: "US-2018174143-A1",
    title: "Differential commit time in a blockchain",
    abstract:
      "A blockchain of transactions may be referenced for various purposes and may be later accessed by interested parties for ledger verification. One example method of operation may include one or more of identifying a blockchain transaction including a buyer and a seller and a product or service, identifying one or more attributes of the blockchain transaction, initializing a sale commit time window assigned to the blockchain transaction based on the one or more attributes, and committing the blockchain transaction to a blockchain when the sale commit time window has elapsed.",
    country: "US",
    publicationDate: "2018-06-21T00:00:00.000Z",
    filingDate: "2016-12-19T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180174143A1",
    relevancyScore: 522.001
  },
  {
    id: "WO-2018018992-A1",
    title: "Method, device and system for applying blockchain",
    abstract:
      "The invention discloses a method, device and system for applying a blockchain, and relates to the technical field of blockchains and IOTs. The method comprises the steps that: a small blockchain server is installed; blockchain clients of a corresponding blockchain are installed and deployed on the small blockchain server; the blockchain clients synchronize data by communicating with all blockchainnodes in a public network, and are in a synchronous state; and the small blockchain server performs the corresponding operation on IOT equipment by utilizing the blockchain clients in the synchronousstate. The small blockchain server in the embodiment of the invention is low in power consumption; the blockchain clients of the corresponding blockchain installed and deployed on the small blockchain server can be updated in time; and in addition, a solution, which is relatively convenient and relatively low in cost, can be provided for the IOT.",
    country: "WO",
    publicationDate: "2018-02-02T00:00:00.000Z",
    filingDate: "2017-05-10T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018018992A1",
    relevancyScore: 519.214
  },
  {
    id: "US-2018232413-A1",
    title: "Node characterization in a blockchain",
    abstract:
      "A blockchain may be used to store transactions in an immutable ledger. The types of transactions may vary and the information from the transactions could be used to identify information about nodes in a particular network. One example operation may include one or more of identifying a number of nodes operating on a blockchain, determining a new blockchain transaction, and determining one or more of the nodes as having one or more characteristics based on the new blockchain transaction.",
    country: "US",
    publicationDate: "2018-08-16T00:00:00.000Z",
    filingDate: "2017-02-13T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180232413A1",
    relevancyScore: 519.193
  },
  {
    id: "CN-206474450-U",
    title: "Blockchain belt cleaning device",
    abstract:
      "The utility model provides a blockchain belt cleaning device, including washing the chain frame, the interior bottom of washing the chain frame is equipped with a plurality of bracing pieces, first rotation axis is installed on the bracing piece top, still include a plurality of rotating electrical machiness, the rotating electrical machines is located the lateral wall of washing the chain frame, the axis of ordinates heart of rotating electrical machines is located the coplanar with the axis of ordinates heart of bracing piece, install the brush dish on the rotating electrical machines, be equipped with a plurality of brushs on the brush dish. The utility model provides a blockchain belt cleaning device, this blockchain belt cleaning device is because the one end fixedly connected with toothed disc of electric brush device for can avoid in the use and use hand rotary chain to reach the washing purpose, install brush plate respectively in the both sides of toothed disc moreover, such design not only can make high -efficient rotary chain under the drive of motor, moreover can fast more clear washing falls the spot of chain surface, great improvement availability factor.",
    country: "CN",
    publicationDate: "2017-09-08T00:00:00.000Z",
    filingDate: "2016-12-10T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN206474450U",
    relevancyScore: 513.22
  },
  {
    id: "WO-2018144302-A1",
    title: "Blockchain data-processing engine",
    abstract:
      "In certain embodiments, for a blockchain such as the Ethereum blockchain, a data-processing engine maintains an accounts database having bloom filters that identify accounts that might have data in different portions of the blockchain, a blocks database that stores optimized versions of one or more (and possibly all of) the blocks in the blockchain, and a transaction-location database that stores a list of transaction locations for each of one or more accounts of interest (AOIs) supported by the engine. The engine uses the accounts and blocks databases to perform system-wide analyses quickly. The engine uses the transaction- location and blocks databases to generate reports for the AOIs quickly. The engine uses the accounts and blocks databases to generate, for the transaction-location database, a new transaction-location list for a new AOI quickly and without requiring a lot of memory.",
    country: "WO",
    publicationDate: "2018-08-09T00:00:00.000Z",
    filingDate: "2018-01-25T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018144302A1",
    relevancyScore: 512.733
  },
  {
    id: "WO-2018135328-A1",
    title:
      "Blockchain management method, blockchain management program, blockchain management device, and blockchain management system",
    abstract:
      "[Problem] To provide a blockchain management method whereby it is possible to assess when having partially changed data that an area other than the changed section has not been tampered with. [Solution] Provided is a blockchain management method designed for a computer to execute the processes of: generating a first hash of data included in a partial block of a first block including a first region whereupon changing of data is prohibited and a second region whereupon changing of data is permitted, said partial block being obtained by excluding the second region from the first block; generating a second hash of data included in the first block; and adding the first hash and the second hash to a second block which is added subsequently to the first block, said second block including a first region whereupon changing of data is prohibited and a second region whereupon changing of data is permitted.",
    country: "WO",
    publicationDate: "2018-07-26T00:00:00.000Z",
    filingDate: "2018-01-05T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018135328A1",
    relevancyScore: 512.298
  },
  {
    id: "WO-2018073564-A1",
    title: "Blockchain mining using trusted nodes",
    abstract:
      "The present techniques generally relate to blockchain infrastructure and, more particularly, to blockchain mining using trusted nodes and methods, apparatuses, and/or articles of manufacture are disclosed that may be implemented, in whole or in part, using one or more mobile communication devices and/or processing devices to facilitate and/or support one or more operations and/or techniques for blockchain mining using trusted nodes, such as via democratization of associated resources for fair blockchain mining, for example.",
    country: "WO",
    publicationDate: "2018-04-26T00:00:00.000Z",
    filingDate: "2017-10-16T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018073564A1",
    relevancyScore: 510.314
  },
  {
    id: "US-2018219671-A1",
    title: "Hardware blockchain acceleration",
    abstract:
      "Hardware acceleration supports complex software processes. In particular, a hardware security module provides encryption support for transaction chains. In one implementation, the security module circuitry provides high-speed security features and acceleration of the security features for blockchain processing.",
    country: "US",
    publicationDate: "2018-08-02T00:00:00.000Z",
    filingDate: "2017-12-20T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180219671A1",
    relevancyScore: 508.347
  },
  {
    id: "US-2018144298-A1",
    title: "Tracking shipping using blockchain",
    abstract:
      "In one embodiment, a secure tracking method and apparatus for cargo in a physical commodity (a container for physical goods) is provided. A wireless ID communicator is provided in each container. A receiver on a transporter (a ship, truck, airplane, or drone) receives periodic goods status updates from a plurality of wireless ID communicators in containers on the transporter. The status updates are transmitted to a central blockchain maintained in a central blockchain database remote from the transporter. The status updates are also added to a local sidechain of the blockchain maintained in a side chain database on the transporter.",
    country: "US",
    publicationDate: "2018-05-24T00:00:00.000Z",
    filingDate: "2017-11-20T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180144298A1",
    relevancyScore: 503.204
  },
  {
    id: "US-2018114261-A1",
    title: "Verifying reviews on a blockchain",
    abstract:
      "A blockchain configuration may be used to store a distributed ledger for product review verification procedure. One example method of operation may include receiving a product review for a product purchase transaction by a purchasing entity, validating the product review was submitted by the purchasing entity by referencing the product purchase transaction in a blockchain, storing the product review and product purchase transaction, creating a link to the product review, and transmitting the link to a product site where the product can be purchased.",
    country: "US",
    publicationDate: "2018-04-26T00:00:00.000Z",
    filingDate: "2016-10-26T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180114261A1",
    relevancyScore: 500.254
  },
  {
    id: "US-2018139278-A1",
    title: "Decentralized immutable storage blockchain configuration",
    abstract:
      "A virtual blockchain configuration may provide a distributed structure that uses a distributed hash configuration to reduce the complexity of blockchain transactions. One example method of operation may comprise one or more of storing a subset of blockchain data in a network device, accessing via the network device a virtual copy of a blockchain, accessing a blockchain block via the virtual copy of the blockchain, and writing blockchain transactions to the blockchain block via the network device.",
    country: "US",
    publicationDate: "2018-05-17T00:00:00.000Z",
    filingDate: "2016-11-14T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180139278A1",
    relevancyScore: 499.053
  },
  {
    id: "US-9934138-B1",
    title: "Application testing on a blockchain",
    abstract:
      "A blockchain test configuration may provide a simple and secure infrastructure for testing applications. One example method of operation may comprise one or more of transmitting a request to a network of nodes to test a test package associated with an application. The method may also include receiving results based on the test of the test package and recording the results in a blockchain.",
    country: "US",
    publicationDate: "2018-06-07T00:00:00.000Z",
    filingDate: "2018-02-05T00:00:00.000Z",
    url: "https://patents.google.com/patent/US9934138B1",
    relevancyScore: 497.007
  },
  {
    id: "US-2018137507-A1",
    title:
      "Performing verification on the blockchain for non-blockchain transactions",
    abstract:
      "A blockchain configuration may be used to store a distributed ledger for information security and accessibility. One example method of operation may include one or more of receiving a request to obtain content from a buyer device, transmitting the request to a registered seller device associated with the content, receiving payment confirmation associated with the content on a blockchain, retrieving an encryption key associated with the content from the blockchain, transmitting the encryption key associated with the content to the buyer device, and based on the encryption key, transmitting the content outside the blockchain to the buyer device.",
    country: "US",
    publicationDate: "2018-05-17T00:00:00.000Z",
    filingDate: "2016-11-14T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180137507A1",
    relevancyScore: 494.869
  },
  {
    id: "US-2017031676-A1",
    title: "Blockchain computer data distribution",
    abstract:
      "Blockchain distribution of computer data is disclosed. Computer data can comprise computer code, a computer code segment, a computer command, or a block of computer data, which can be employed by a device to patch software, change a device state, or synchronize data between devices. Blockchain distribution can provide benefits in a heterogeneous device environment, facilitate ad hoc device synchronization, and embody a distributed patch and communications network. Devices can receive a blockchain block from another device and, in some embodiments, enable other devices to access the block from the device. In some embodiments, devices can discard irrelevant blocks, however, an entire blockchain can be reconstructed where partial blockchains can be received from more than one device. Additionally, checkpoint blocks can enable devices to navigate the blockchain efficiently by skipping over known irrelevant blocks.",
    country: "US",
    publicationDate: "2017-02-02T00:00:00.000Z",
    filingDate: "2016-07-25T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170031676A1",
    relevancyScore: 494.661
  },
  {
    id: "CN-106686087-A",
    title: "Blockchain truncation method and distributed node",
    abstract:
      "The invention provides a blockchain truncation method and a distributed node. The blockchain truncation method is applied to the distributed node and includes: according to an own stored blockchain, judging whether to truncate the blcokchain or not periodically; if yes, jointing all distributed nodes to judge whether truncation of the blockchain is allowed or not; if yes, jointing all of the distributed nodes to select a blockchain truncation position; truncating the blockchain at the blockchain truncation position; storing the blockchain, obtained after blockchain truncation, earlier in generation time and related information of the blockchain earlier in generation time into a set memory. By adoption of the technical scheme, blockchain length is effectively controlled while data integrity is guaranteed, voting availability of all distributed nodes is guaranteed, and a decentration characteristic of the blockchain is protected.",
    country: "CN",
    publicationDate: "2017-05-17T00:00:00.000Z",
    filingDate: "2016-12-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN106686087A",
    relevancyScore: 489.247
  },
  {
    id: "CN-107644064-A",
    title: "Blockchain-based student file system",
    abstract:
      "The invention discloses a blockchain-based student file system. The system comprises a file writing unit, a blockchain processing unit, a government connection unit, a right management unit, and a file inquiry unit, wherein the file writing unit is used for building an electronic student file and/or scanning a paper file so as to obtain an electronic image of a student, the blockchain processing unit comprises a file processing module for generating a digital fingerprint and registering the digital fingerprint in a blockchain and a node synchronization module for synchronizing and identifyingmultiple nodes of the blockchain in a preset time, the government connection unit comprises a government connection unit, a household-government connection module, and a regular operation module for controlling a public security department connection module and the household-government connection module to acquire student information in a preset period and sending the information to the blockchainprocessing unit to update the file, the right management unit is used for adding, deleting, modifying and inquiring the right of a user, and the file inquiry unit is used for enabling a user with a right to search and read a student file. The blockchain-based student file system provides a public credit mechanism and can record accurate information.",
    country: "CN",
    publicationDate: "2018-01-30T00:00:00.000Z",
    filingDate: "2017-08-31T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107644064A",
    relevancyScore: 486.331
  },
  {
    id: "CN-206797615-U",
    title: "Blockchain coils palm by oneself",
    abstract:
      "The utility model relates to a blockchain dish technical field especially discloses a blockchain coils palm by oneself by oneself, including sprocket and supporting wheel, the sprocket includes the wheel body, locate a plurality of rounds of wheel body mentions first through -hole, the supporting wheel hold locate first through -hole in, the wheel body is equipped with the projection and goes into a plurality of protruded stigmas in the first through -hole, the supporting wheel is equipped with and is used for holding a plurality of first blind groove of establishing a plurality of protruded stigmas, the lateral wall of first through -hole separates each other with the surface of supporting wheel and sets up, installs flexible between wheel body and the supporting wheel, during the in -service use, the chain cover of bicycle is established on the teeth of a cogwheel of sprocket, and at the in -process of advancing of bicycle, when the chain dish vibrated owing to ground unevenness, the elastic component cushioned the vibration of wheel body, slows down owing to the vibration of chain dish and causes the impact that produces between sprocket and the chain, lengthens the life of sprocket and chain.",
    country: "CN",
    publicationDate: "2017-12-26T00:00:00.000Z",
    filingDate: "2017-04-20T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN206797615U",
    relevancyScore: 485.345
  },
  {
    id: "US-2018114218-A1",
    title: "Blockchain: automatic fork protection",
    abstract:
      "Systems and methods for providing automatic fork protection including determining that a transaction having fork protection was included in a first block that was appended to a blockchain, that a hash of the first block was validated, that a consensus decision was made by validator nodes approving the first block for addition to the blockchain, that a second block was appended to the blockchain after the first block, that the second block comprises a hash that is not based on the first block, that the first block was on a first fork and the second block was on a second fork, that the blockchain was resolved in favor of the second fork, and that the transaction failed as a result of the blockchain being resolved in favor of the second fork. The method including compensating a party that submitted the failed transaction based on the fork protection.",
    country: "US",
    publicationDate: "2018-04-26T00:00:00.000Z",
    filingDate: "2016-10-26T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180114218A1",
    relevancyScore: 484.631
  },
  {
    id: "WO-2018039722-A1",
    title: "Dynamic access control on blockchain",
    abstract:
      "This disclosure describes dynamic access control using capabilities (via dynamic access control interface (150)) on a blockchain system (180). The blockchain data structure is a time- stamped list of blocks, chained together cryptographically. In this disclosure, capabilities can be recorded on a blockchain system (via capabilities storage (170)) and thus access propagation is known. This makes revocation of access achievable by recording a new transaction, which in effect removes the previous authorization. There will be no change to transaction history and instead a new transaction records (170) the current status of the capability. An example implementation on a blockchain system (180) is given in Ethereum, which allows programs called &#34;smart contracts&#34; to run as transactions.",
    country: "WO",
    publicationDate: "2018-03-08T00:00:00.000Z",
    filingDate: "2017-08-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018039722A1",
    relevancyScore: 483.784
  },
  {
    id: "WO-2018149706-A1",
    title: "Blockchain-based distributed credit method",
    abstract:
      "A network of connected devices share a ledger of payment transactions between them under the form of a standard payment blockchain. A specific obligation blockchain is added to the network, also shared by the connected devices, and a link is made between the standard payment blockchain and the specific obligation blockchain, to reflect payments made in relation to obligations. A distributed credit method is built on top of this infrastructure.",
    country: "WO",
    publicationDate: "2018-08-23T00:00:00.000Z",
    filingDate: "2018-02-07T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018149706A1",
    relevancyScore: 483.308
  },
  {
    id: "WO-2018084922-A1",
    title: "Flexible blockchain smart-contract deployment",
    abstract:
      "A flexible blockchain smart-contract deployment design supporting both selective on-chain deployment and remote deployment with verified determinism and other valuable blockchain properties.",
    country: "WO",
    publicationDate: "2018-05-11T00:00:00.000Z",
    filingDate: "2017-09-01T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018084922A1",
    relevancyScore: 483.168
  },
  {
    id: "US-2017134161-A1",
    title: "Blockchaining for media distribution",
    abstract:
      "A system for distributing content over an electronic communications network includes a first electronic device including a first processor and a first memory, and a second electronic device including a second processor and a second memory. The second electronic device is configured to communicate with the first electronic device over the electronic communications network. The system further includes a blockchain and a blockchain processor in operable communication with each of the first electronic device and the second electronic device over the electronic communications network. The blockchain processor is configured to verify a transfer of content between the first electronic device and the second electronic device, and to update the blockchain with information regarding the verified transfer of content.",
    country: "US",
    publicationDate: "2017-05-11T00:00:00.000Z",
    filingDate: "2016-11-07T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170134161A1",
    relevancyScore: 482.064
  },
  {
    id: "WO-2018020376-A1",
    title: "Blockchain-implemented method and system",
    abstract:
      "The invention provides a novel and advantageous solution for controlling or influencing use of and/or access to a resource. This resource may be a device, such as an IoT (Internet of Things) device or a process. The invention is implemented via a distributed ledger (blockchain). This may be the Bitcoin blockchain or some alternative blockchain platform/protocol. In an illustrative embodiment, the controlled resource is a parking meter. The invention may provide a method comprising the steps of generating a blockchain transaction (Tx) indicative of a condition on use of the resource, the blockchain transaction comprising a multi -signature script requiring a plurality of signatures for completion of the blockchain transaction; providing a first subset of the plurality of signatures to the blockchain transaction to generate a partially signed signature script to partially complete the blockchain transaction; and responsive to the condition on the use of the resource being satisfied, providing a second subset of the plurality of signatures to the blockchain transaction to fully complete the blockchain transaction. The condition on the use of the resource may be the use of a discrete amount of the resource and the second subset of the plurality of signatures is provided responsive to the discrete amount of the resource being used.",
    country: "WO",
    publicationDate: "2018-02-01T00:00:00.000Z",
    filingDate: "2017-07-21T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018020376A1",
    relevancyScore: 478.297
  },
  {
    id: "CN-107609876-A",
    title: "Method and system for recovering blockchain assets",
    abstract:
      "The invention discloses a method and a system for recovering blockchain assets, and belongs to the technical field of blockchain asset recovery. A social relationship is imported into a blockchain, and assets corresponding to a lost private key are transferred to a new lockchain account in an intelligent contract way, i.e., the blockchain assets of all people in original blockchain assets are recovered.",
    country: "CN",
    publicationDate: "2018-01-19T00:00:00.000Z",
    filingDate: "2017-08-18T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107609876A",
    relevancyScore: 476.775
  },
  {
    id: "WO-2018111295-A1",
    title: "Blockchain monitoring and management",
    abstract:
      "In some examples, a first node is able to communicate with one or more second nodes for participating in a consensus system. The first node may receive an indication that a smart contract associated with a blockchain is to be executed. The first node may determine whether the blockchain includes auditing information in one or more blocks of the blockchain. For instance, the auditing information may include at least one of: node information about the first node and the one or more second nodes, digital signature information corresponding to the smart contract, information related to data received for execution of the smart contract, or information related to a communication received to invoke execution of the smart contract. Based at least partially on determining that the blockchain includes the auditing information, the first node proceeds with executing the smart contract.",
    country: "WO",
    publicationDate: "2018-06-21T00:00:00.000Z",
    filingDate: "2016-12-16T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018111295A1",
    relevancyScore: 476.364
  },
  {
    id: "US-2018131706-A1",
    title: "Filtering and redacting blockchain transactions",
    abstract:
      "A blockchain may store transactions which should were not intended to be recorded due to inappropriate content or unwanted subject matter submitted by malicious users. A method may also include one or more of identifying a blockchain transaction, processing content of the blockchain transaction to identify prohibited content, and determining whether to approve or disapprove the blockchain transaction based on the content of the blockchain transaction.",
    country: "US",
    publicationDate: "2018-05-10T00:00:00.000Z",
    filingDate: "2016-11-10T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180131706A1",
    relevancyScore: 476.043
  },
  {
    id: "GB-2549085-A",
    title: "Blockchain state reliability determination",
    abstract:
      "Receiving code distributed by a base station at a target device via a network, via one or more distribution servers arranged between the base station and one or more devices on the network. The base station maintains a first blockchain having a state determined by a most recently committed block in the first blockchain. The target device receives the code, a defined list of devices connected to the network, and the hash value for the code and the defined list of devices via the one or more distribution servers. It also receives a broadcast communication including a current state of the first blockchain for receipt by target device, the validity of the hash value evaluated for the preceding state of the first blockchain is based on access to a second blockchain. The second blockchain is validated by blockchain miners at the destination devices so as to confirm the validity of blocks in the second blockchain and in response to the verification that the target device is included in the list of network connected devices, executing the code at the target device.",
    country: "GB",
    publicationDate: "2017-10-11T00:00:00.000Z",
    filingDate: "2016-03-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/GB2549085A",
    relevancyScore: 461.284
  },
  {
    id: "CN-108023893-A",
    title: "Method for blockchain data authentication system",
    abstract:
      "The invention provides a method for a blockchain data authentication system. A blockchain network node module realizes a blockchain technology through utilization of a cryptography technology, a P2P network, a consensus algorithm, a synchronization algorithm and the like and provides a RPC interface for interaction with an interface module. The interface (API) module provides interfaces such as adata insertion interface, a query interface and an authentication interface for a blockchain account registration module, a blockchain browser module, a blockchain data input module, a blockchain dataquery module and a wallet module (an APP and a client). The blockchain account registration module provides a system employing entry for a user and registers user information with a blockchain. The blockchain browser module provides an open transparent query function for the user. The blockchain data input module adds authoritative data to the blockchain. The blockchain data query module determines whether data exists or not by querying keywords and provides authoritative authentication. The wallet module provides convenient key management, account management and key backup and restoration functions for the user. The system is high in security, low in resource occupation rate and high in user experience.",
    country: "CN",
    publicationDate: "2018-05-11T00:00:00.000Z",
    filingDate: "2017-12-18T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN108023893A",
    relevancyScore: 453.562
  },
  {
    id: "CN-107483198-A",
    title: "Supervisory blockchain system and method",
    abstract:
      "The invention relates to a supervisory blockchain system and method. The system comprises a certificate authority (CA), a key distribution center (KDC), a supervision department and a common node, wherein the CA performs identity authentication for the common node to generate registration information about the node, and the registration information is opened to a blockchain network and waits to be written into a blockchain to complete the registration of the node; the KDC prepares supervision rules, defines a complete attribute set of the supervision department, and distributes keys to the supervision department according to specific attributes of the supervision department; the supervision department acquires the keys from the KDC, monitors network transactions of the blockchain, and adopts the own keys to decrypt the node registration information in the blockchain and acquire the real identity of the node when an abnormal account occurs; and the common node interacts with the CA, performs identity authentication, and joins the blockchain to operate after completing the registration. According to the system and method disclosed by the invention, a supervisory blockchain is constructed by using ABE, signatures and other cryptography techniques, different supervision departments are allowed to supervise data of the blockchain system according to different functions, and thus the occurrence of illegal acts and the like can be prevented.",
    country: "CN",
    publicationDate: "2017-12-15T00:00:00.000Z",
    filingDate: "2017-09-25T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107483198A",
    relevancyScore: 449.801
  },
  {
    id: "CN-108021506-A",
    title: "Method for detecting blockchain system",
    abstract:
      "The invention provides a method for detecting a blockchain system. The method is characterized in that an application program can call an API provided by an interface module, and through the arrangement of a policy module, the interface module can transmit a policy setting module to a node detection module, a security detection module and a blockchain query module for detection; the node detectionmodule, the security detection module and the blockchain query module receive detection instructions and then conduct node detection, security detection and blockchain query respectively to generatedetailed data information; a report module generates image-text report data and records report time, report content and the like according to detection data provided by all the detection modules. Themethod has the advantages of being accurate in system detection, comprehensive in protection, high in security, low in system resource occupancy rate and good in user experience.",
    country: "CN",
    publicationDate: "2018-05-11T00:00:00.000Z",
    filingDate: "2017-12-18T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN108021506A",
    relevancyScore: 448.788
  },
  {
    id: "US-2017149560-A1",
    title: "Digital blockchain authentication",
    abstract:
      "A system for authenticating an access to a computerized records data-store by a plurality computer networking systems. The system includes a pre-stored identity information database to store identity information of the plurality of computer networking systems. The plurality of computer networking systems may include at least a first computer networking system and a second computer networking system such that the first computer networking system is uniquely defined by a first identity information and the second computer networking system is uniquely defined by a second identity information such that only the first computer networking system owns a registered digital account with the system and is authorized to access the computerized records data-store.",
    country: "US",
    publicationDate: "2017-05-25T00:00:00.000Z",
    filingDate: "2017-02-08T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170149560A1",
    relevancyScore: 447.087
  },
  {
    id: "WO-2018020377-A1",
    title: "Blockchain-implemented method and system",
    abstract:
      "The invention provide a blockchain-implemented control method and corresponding system(s). The invention may be arranged to control access to and/or use of an internet-enabled resource such as for example an IoT device. The resource may be a device or system. It may, for example, be a vehicle such as a driverless taxi or car. The vehicle may be provided with computing capabilities to enable it to communicate with other computer-based resources and/or interact with a distributed ledger. This distributed ledger may be a blockchain, such as, for example, the Bitcoin blockchain. In one embodiment, the invention provides a method for controlling the use of an internet-enabled resource comprising the steps of: providing a first blockchain transaction comprising at least one output which is redeemable only by provision of at least: i) a secret value selected by a user; and ii) a signature associated with a resource provider; sending use-related information to the resource; generating a second blockchain transaction requesting at least the secret value; and modifying the second blockchain transaction to include the secret value.",
    country: "WO",
    publicationDate: "2018-02-01T00:00:00.000Z",
    filingDate: "2017-07-21T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018020377A1",
    relevancyScore: 446.635
  },
  {
    id: "GB-2559165-A",
    title: "Blockchain zero checksum trading system",
    abstract:
      "A secure network architecture provides a digital securities trading with blockchain credit guarantees. A collateral asset trust, such as government bonds, secures blockchain ledger bonds used in a private credit-guarantee system. A new crosscheck two-ledger method for verification of users and transactions is implemented to record true blockchain transactions. Every is validated by means of a second blockchain ledger that is verified by secure crosscheck hashing algorithms. This system incorporates biometric user credentials and integrates a background-check SOAP to verify credit records. An improvement over prior-art block chain ledgers is a zero-checksum algorithm, using two encrypted ledgers in order to incorporate vetted user information and transactions in the blockchain, which is proposed as another improvement over prior art by solving problems limiting regulatory approval. The two ledgers undergo a fast Fourier transform (FFT) to form time domain pulses. The checksums are compared, and if the differences between the checksums is non-zero, an error is determined.",
    country: "GB",
    publicationDate: "2018-08-01T00:00:00.000Z",
    filingDate: "2017-01-29T00:00:00.000Z",
    url: "https://patents.google.com/patent/GB2559165A",
    relevancyScore: 446.232
  },
  {
    id: "US-2018174097-A1",
    title: "Tracking shipments with a local and remote blockchain",
    abstract:
      "A blockchain of transactions may be referenced for various purposes and may be later accessed by interested parties for ledger verification. One example method of operation may comprise one or more of identifying shipment locations for a product shipment, storing the shipment locations in a local blockchain, transmitting the shipment locations to a remote blockchain, comparing the shipment locations of the remote blockchain with the shipment locations stored in the local blockchain, and verifying the shipment locations of the remote blockchain are consistent with the shipment locations stored in the local blockchain.",
    country: "US",
    publicationDate: "2018-06-21T00:00:00.000Z",
    filingDate: "2016-12-19T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180174097A1",
    relevancyScore: 443.883
  },
  {
    id: "CN-108111585-A",
    title: "Blockchain-based distributed storage method",
    abstract:
      "The invention discloses a blockchain-based distributed storage method including that S1, a uploader in a distributed storage network generates an upload request and records the upload request in a smart contract of the blockchain; S2, a file to be stored id split into multiple file fragments; S3, a storer in the distributed storage network generates a storage request and records the storage request in the smart contract of the blockchain; S4, a storage transaction that the uploader and the storer store the file fragments is generated in the blockchain; and S5, the storer stores the file fragments. The blockchain-based distributed storage method realizes distributed storage of files and improves the security of file storage.",
    country: "CN",
    publicationDate: "2018-06-01T00:00:00.000Z",
    filingDate: "2017-12-15T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN108111585A",
    relevancyScore: 443.754
  },
  {
    id: "WO-2017167550-A1",
    title: "Blockchain state reliability determination",
    abstract:
      "A computer implemented method for receiving code distributed by a base station at a target device via a network, the distribution being made to one or more destination devices including the target device via one or more distribution servers arranged between the base station and the one or more devices on the network, wherein the base station maintains a first blockchain data structure storing one or more blocks and having a state determined by a most recently committed block in the first blockchain, the method comprising: receiving the code, a defined list of devices connected to the network, and the hash value for the code and the defined list of devices via the one or more distribution servers; receiving a broadcast communication including a current state of the first blockchain for receipt by target device, the current state including a transaction having a hash value for the code and the list of network connected devices, and the current state having associated a hash value based on the contents of the transaction and a hash value evaluated for a block corresponding to a preceding state of the first blockchain; verifying, based on access to a second blockchain, the validity of the hash value evaluated for the preceding state of the first blockchain, the second blockchain storing blocks of one or more transactions containing hash values for one or more previous states of the first blockchain, and the second blockchain being validated by blockchain miners at one or more of the destination devices so as to confirm the validity of blocks in the second blockchain; and in response to the verification and a determination that the target device is included in the list of network connected devices, executing the code at the target device.",
    country: "WO",
    publicationDate: "2017-10-05T00:00:00.000Z",
    filingDate: "2017-03-03T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2017167550A1",
    relevancyScore: 443.337
  },
  {
    id: "WO-2018145201-A1",
    title: "Blockchain mine at oil or gas facility",
    abstract:
      "Methods and systems of operating a blockchain mining device using natural gas produced at a hydrocarbon production, storage, or processing site/facility. A generator may be retrofitted to an existing prime mover used to pump the well, and the generator may be used to power the blockchain mining device. Portable mining devices may be hooked up to a casinghead gas supply at a remote, isolated oil facility. Power loading levels may be modulated by adjusting mining transaction levels to correspond with combustible gas production levels.",
    country: "WO",
    publicationDate: "2018-08-16T00:00:00.000Z",
    filingDate: "2018-02-06T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018145201A1",
    relevancyScore: 443.107
  },
  {
    id: "US-2017337534-A1",
    title: "Systems and methods for blockchain virtualization and scalability",
    abstract:
      "A virtualized blockchain forest includes a plurality of individual blockchains. Each individual blockchain of the plurality includes a blockchain height, a genesis block, and at least one additional block. The virtualized blockchain forest further includes a plurality of participating processors that make up a consensus pool, and a blockchain forest height having a time-sequenced start-to-finish length of blocks among the collective plurality of individual blockchains. The virtualized blockchain forest is configured to aggregate different ones of the plurality of individual blockchains, and is further configured to terminate individual ones of plurality of individual blockchains.",
    country: "US",
    publicationDate: "2017-11-23T00:00:00.000Z",
    filingDate: "2017-03-31T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170337534A1",
    relevancyScore: 441.428
  },
  {
    id: "US-2017031874-A1",
    title: "Blockchain and deep links for mobile apps",
    abstract:
      "A deep link can have a name of a mobile app and a network address of a device on which an instance of the app is running. Deep links can be stored in a blockchain, along with related data, like the location of the device running the app. The deep links in the blockchain can be analysed to make a social network graph. A node in the graph is a network address of a mobile device running a mobile app. An edge between 2 nodes is a mobile app, which had 2 instances of the app interacting, where each instance runs on one of the nodes. The edge could be directed, going from the first earlier instance to the second instance. A blockchain can be used by a mobile app to write a deep link referring to itself. The app instance is looking to interact with other instances of the app. Another device scans the blockchain to get the deep link. It makes an instance of the app that interacts with the instance that wrote the deep link to the blockchain. The deep link in the blockchain could have associated data like the start and stop times of an interaction with other instances. Thus a blockchain can promote the direct interaction of instances of mobile apps. The logic to decide whether an app writes a deep link to the blockchain can be instantiated as a Writer. This can exist inside the app, or on the device, but outside any app, or on the network. Also, the app server might use a Writer, where the Writer is on the server machine or on the network.",
    country: "US",
    publicationDate: "2017-02-02T00:00:00.000Z",
    filingDate: "2015-07-28T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170031874A1",
    relevancyScore: 441.083
  },
  {
    id: "WO-2018020389-A3",
    title: "Blockchain implemented method and system",
    abstract:
      "The invention relates to computer-based, electronic ledgers, and in particular distributed ledgers known as &#34;blockchains&#34;. The invention is suited for use with the Bitcoin blockchain and associated protocol, but is not limited in this regard and can be deployed using other blockchain platforms. The invention provides a novel and advantageous technique for executing a micropayment channel in which the number of transactions (TXs) that need to be submitted to the blockchain can be greatly reduced. An initial transaction (Tx) can be replaced by one or more subsequent transactions which another party can hold onto until a selected transaction is completed (signed) and submitted to the network. In one embodiment, the invention provides a computer-implemented method for performing an exchange via a blockchain, comprising the step of submitting a funding transaction to the blockchain network, wherein the funding transaction i) comprises a tokenised contract relating to an asset to be transferred from a second user to a first user; and ii) is signed by the first user. It also comprises the step of sending, from the first user to the second user, one or more subsequent transactions wherein each said subsequent transaction spends an output of the funding transaction and is signed by the first user. It includes the step of submitting one of the subsequent transactions to the blockchain network, the submitted transaction having been signed by the second user.",
    country: "WO",
    publicationDate: "2018-03-08T00:00:00.000Z",
    filingDate: "2017-07-24T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018020389A3",
    relevancyScore: 438.676
  },
  {
    id: "WO-2018132108-A1",
    title: "Techniques for secure blockchain management",
    abstract:
      "Embodiments of the invention are directed to a method for reducing a computational burden of a blockchain provider. A data processing computer may facilitate an exchange of a data transfer message between respective applications of a first and second device. The data processing computer may maintain an electronic record according to the exchange. A net transfer value may be determined for the record and data comprising the net transfer value may be transmitted to a blockchain provider. Receipt of the data by the blockchain provider may cause the blockchain provider to update a ledger with the net transfer value.",
    country: "WO",
    publicationDate: "2018-07-19T00:00:00.000Z",
    filingDate: "2017-01-13T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018132108A1",
    relevancyScore: 438.453
  },
  {
    id: "US-2018165611-A1",
    title:
      "Providing Commerce-Related, Blockchain-Associated Cognitive Insights Using Blockchains",
    abstract:
      "A method, system and computer-usable medium for providing cognitive insights comprising receiving data from a plurality of data sources, at least some of the plurality of data sources comprising commerce related data sources and blockchain data sources; processing the data from the plurality of data sources to provide a commerce-related, blockchain-associated cognitive insight; and, providing the commerce-related, blockchain-associated cognitive insight to a destination.",
    country: "US",
    publicationDate: "2018-06-14T00:00:00.000Z",
    filingDate: "2016-12-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180165611A1",
    relevancyScore: 436.296
  },
  {
    id: "US-2018198624-A1",
    title: "Private blockchain transaction management and termination",
    abstract:
      "A blockchain of transactions may be referenced for various purposes and may be later accessed for ledger verification. One example operation may include one or more of identifying a plurality of rules defining a temporary private blockchain, creating a private blockchain block comprising the plurality of rules defining the temporary private blockchain, transmitting an update to a private blockchain block, and designating the temporary private blockchain closed responsive to receiving the update.",
    country: "US",
    publicationDate: "2018-07-12T00:00:00.000Z",
    filingDate: "2017-01-12T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180198624A1",
    relevancyScore: 435.886
  },
  {
    id: "CN-106682528-A",
    title: "Blockchain encryption retrieval scheme",
    abstract:
      "The invention provides a blockchain encryption retrieval scheme. A user having the right to query sets a retrieval code, a factor needing to be retrieved is connected with the retrieval code in series, and a Hash operation is conducted; the result obtained after the Hash operation serves as a key, a content needing to be queried is stored in a value, and a symmetric key is used for encryption and encrypted with a public key of an authorized user. In query, the user computes the key so that the value can be found. The key and value serve as the transaction content so as to compute a Hash value, namely hash, to be uploaded to a blockchain.",
    country: "CN",
    publicationDate: "2017-05-17T00:00:00.000Z",
    filingDate: "2016-12-31T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN106682528A",
    relevancyScore: 434.008
  },
  {
    id: "US-2018165758-A1",
    title:
      "Providing Financial-Related, Blockchain-Associated Cognitive Insights Using Blockchains",
    abstract:
      "A method, system and computer-usable medium for providing cognitive insights comprising receiving data from a plurality of data sources, at least some of the plurality of data sources comprising financial related data sources and blockchain data sources; processing the data from the plurality of data sources to provide a financial-related, blockchain-associated cognitive insight; and, providing the financial-related, blockchain-associated cognitive insight to a destination.",
    country: "US",
    publicationDate: "2018-06-14T00:00:00.000Z",
    filingDate: "2016-12-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180165758A1",
    relevancyScore: 431.767
  },
  {
    id: "US-2018108089-A1",
    title: "Transactions and linked assets on a blockchain",
    abstract:
      "A blockchain configuration may log asset data as well as transaction data. One example method of operation may include logging a transaction on a blockchain, linking assets to the transaction, recording a current asset state on the blockchain of the assets responsive to linking the assets to the transaction, determining parties to the blockchain transaction have requirement criteria associated with the current asset state, and monitoring the current asset state to identify whether a lapse in the requirement criteria has occurred.",
    country: "US",
    publicationDate: "2018-04-19T00:00:00.000Z",
    filingDate: "2016-10-14T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180108089A1",
    relevancyScore: 431.046
  },
  {
    id: "CN-107944255-A",
    title: "Blockchain-oriented key management method",
    abstract:
      "The present invention discloses a blockchain-oriented key management method, which is used for initial allocation, management and loss recovery of the key. The method comprises the following steps: before starting the application, allocating two pairs of keys for each user who joins the blockchain, and generating a pair of backup keys at the same time in a key management center (platformer side);setting weights for the master key pair, the secondary key pair, and the backup key pair respectively; and defining a multi-signature verification script for the blockchain transaction process. In practical applications, the method can be further extended to multiple platform and multi-mode weight checks. According to the blockchain-oriented key management method disclosed by the present invention, a set of solutions for key recovery, asset recovery, and multi-user rights management after the loss of the key in a blockchain application are proposed, the problems that key recovery and the difficulty in finding or recovering the assets in the case of key loss can be effectively solved, bigger problems and loopholes in the existing key management mechanism in the blockchain application are made up, and normal use for users can be facilitated.",
    country: "CN",
    publicationDate: "2018-04-20T00:00:00.000Z",
    filingDate: "2016-10-13T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107944255A",
    relevancyScore: 430.669
  },
  {
    id: "WO-2018075129-A1",
    title: "Blockchain-based digital rights management",
    abstract:
      "Generating a rights blockchain storing rights of a user, including: receiving an enrollment request and a public key from the user; verifying that the user has a private key corresponding to the public key; generating a user identifier using the public key; and generating and delivering the rights blockchain having a genesis block including the user identifier to the user.",
    country: "WO",
    publicationDate: "2018-04-26T00:00:00.000Z",
    filingDate: "2017-08-15T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018075129A1",
    relevancyScore: 429.97
  },
  {
    id: "US-2018165588-A1",
    title:
      "Providing Healthcare-Related, Blockchain-Associated Cognitive Insights Using Blockchains",
    abstract:
      "A method, system and computer-usable medium for providing cognitive insights comprising receiving data from a plurality of data sources, at least some of the plurality of data sources comprising healthcare related data sources and blockchain data sources; processing the data from the plurality of data sources to provide a healthcare-related, blockchain-associated cognitive insight; and, providing the healthcare-related, blockchain-associated cognitive insight to a destination.",
    country: "US",
    publicationDate: "2018-06-14T00:00:00.000Z",
    filingDate: "2016-12-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180165588A1",
    relevancyScore: 427.335
  },
  {
    id: "US-2018165612-A1",
    title:
      "Method for Providing Commerce-Related, Blockchain-Associated Cognitive Insights Using Blockchains",
    abstract:
      "A method for providing commerce-related, blockchain-associated cognitive insights comprising: receiving data from a plurality of data sources, at least some of the plurality of data sources comprising commerce related data sources and blockchain data sources; processing the data from the plurality of data sources to provide a commerce-related, blockchain-associated cognitive insight; and, providing the commerce-related, blockchain-associated cognitive insight to a destination.",
    country: "US",
    publicationDate: "2018-06-14T00:00:00.000Z",
    filingDate: "2016-12-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180165612A1",
    relevancyScore: 426.897
  },
  {
    id: "US-2017352027-A1",
    title: "Authenticated data feed for blockchains",
    abstract:
      "An apparatus in one embodiment comprises a processing platform having at least one processing device. The processing platform implements a trusted bridge configured for at least temporary coupling between one or more data sources and a smart contract program of a blockchain. The trusted bridge comprises a secure enclave component and a relay component. Data obtained from a given one of the data sources via the relay component of the trusted bridge is authenticated in the secure enclave component of the trusted bridge. Information based at least in part on the data authenticated in the secure enclave component of the trusted bridge is provided to the smart contract program of the blockchain via the relay component of the trusted bridge. The secure enclave component illustratively receives a request for authenticated data from the blockchain smart contract program via the relay component, and responds to the request via the relay component.",
    country: "US",
    publicationDate: "2017-12-07T00:00:00.000Z",
    filingDate: "2017-06-06T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170352027A1",
    relevancyScore: 424.798
  },
  {
    id: "US-9882918-B1",
    title: "User behavior profile in a blockchain",
    abstract:
      "A method, system and computer-usable medium are disclosed for generating a cyber behavior profile, comprising: monitoring user interactions between a user and an information handling system; converting the user interactions and the information about the user into electronic information representing the user interactions; generating a unique cyber behavior profile based upon the electronic information representing the user interactions and the information about the user; and, storing information relating to the unique cyber behavior profile in a behavior blockchain.",
    country: "US",
    publicationDate: "2018-08-28T00:00:00.000Z",
    filingDate: "2018-01-24T00:00:00.000Z",
    url: "https://patents.google.com/patent/US9882918B1",
    relevancyScore: 424.592
  },
  {
    id: "US-2017103167-A1",
    title: "Blockchain system for natural language processing",
    abstract:
      "A blockchain configured system includes a router and a blockchain configured record bank. The router collects data and converts it in a format in accordance with a defined standard. The blockchain configured record bank can include or be coupled to a data repository. The blockchain configured record bank can be configured to be coupled to the data provider through the router over a communication network. The blockchain configured record bank stores the data received from the data provider and can be accessible or searchable from within or outside the blockchain configured record bank. The blockchain configured record bank can be coupled to or include a data logging unit that maintains metadata associated with the data and configured to facilitate natural language processing capabilities. The router and the blockchain configured record bank may be coupled to machine learning system, metadata validation system, and master data validation system.",
    country: "US",
    publicationDate: "2017-04-13T00:00:00.000Z",
    filingDate: "2016-12-22T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20170103167A1",
    relevancyScore: 424.434
  },
  {
    id: "US-2018173719-A1",
    title: "Shared document editing in the blockchain",
    abstract:
      "A blockchain of transactions may be referenced for various purposes and may be later accessed by interested parties for ledger verification. One example operation may comprise one or more of identifying determining a shared file is being edited by one or more entities, identifying one or more changes to the shared file while the shared file is being edited, signing the one or more changes with one or more public keys, and adding the one or more changes to a blockchain.",
    country: "US",
    publicationDate: "2018-06-21T00:00:00.000Z",
    filingDate: "2016-12-16T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180173719A1",
    relevancyScore: 422.235
  },
  {
    id: "WO-2018020372-A1",
    title: "Blockchain-implemented system and method",
    abstract:
      "The invention provides a novel and advantageous method and corresponding system. The invention is implemented via a distributed electronic ledge (blockchain). This may or may not be the Bitcoin blockchain. The invention is suited for the exchange or transfer of an asset, e.g. a digital asset, such as tickets and the like (but not limited in this regard). A n embodiment may provide a computer - implemented method for transferring an asset between a first user and a second user via a blockchain, the method comprising: generating a first blockchain transaction comprising at least one first output, representing at least one first asset, redeemable by providing either: (i) unlocking data; or (ii) a cryptographic signature of the first user and a cryptographic signature of a second user, wherein the at least one first asset is exchanged for at least one second asset represented by a t least one second output of a second blockchain transaction, the at least one second output redeemable by providing either: (i) the unlocking data; or (ii) the cry ptographic signature of the first user and the cryptographic signature of the second user, and wherein redemption of at least one second output by providing the first unlocking data makes the first unlocking data available to redeem at least one first output. The unlocking data may the unlocking data comprise revealable data which is chosen by the first user and is initially kept secret or unknown to the second user. Redemption of a third transaction causes the revealable data to become publicly available via the blockchain and thus known to the second user, who can use it in another unlocking script.",
    country: "WO",
    publicationDate: "2018-02-01T00:00:00.000Z",
    filingDate: "2017-07-21T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018020372A1",
    relevancyScore: 422.078
  },
  {
    id: "CN-206682224-U",
    title: "Stereo garage moves blockchain strip",
    abstract:
      "The utility model discloses a stereo garage moves blockchain strip, in order to solve the problem that perpendicular circulating intelligent stereo garage moved the car conveying chain, include to become integrative inner plate, outer chain plate through round pin axle, muffjoint, characterized by sets up the link plate respectively in the outer chain plate one side of waiting the joint number chain link, the link plate be the isosceles triangle structure, the base position of link plate be equipped with with the pinhole of being connected of selling the shaft fit, the apex angle position of link plate is equipped with hanging scroll bearing base hole. Utilize outer chain plate or directly use outer chain plate to carry out the link plate design, guarantee the wholeness of chain self, pleasing to the eye degree, under the prerequisite that satisfies chain intensity, make the link plate structure simplify to chain self weight falls to the gentlyest, arranging of joint number chain link link plate such as equitable provides the parking system who does the cyclic motion with the vertical direction, realizes with intelligent storing and taking vehicle task to it hangs intensity to keep every vehicle to have safe parking.",
    country: "CN",
    publicationDate: "2017-11-28T00:00:00.000Z",
    filingDate: "2017-03-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN206682224U",
    relevancyScore: 421.766
  },
  {
    id: "WO-2018020371-A1",
    title: "Blockchain-implemented method and system",
    abstract:
      "This invention relates generally to distributed ledger technology (including blockchain related technologies), and in particular the use of a blockchain in implementing, controlling and/or automating a task or process. It may relate to the use of a blockchain or related technology for recording or representing the execution of a portion of logic. This portion of logic may be arranged to implement the functionality of a logic gate, or plurality of logic gates, such as AND, XOR, NOT, OR etc.. An embodiment of the invention may comprise the steps of: providing a blockchain Transaction comprising a redeem script for an output, wherein the redeem script comprises: i) a plurality of public keys, each associated with a corresponding private key; and wherein each public key is uniquely associated with a potential state of at least one data source; and wherein a minimum number of said private keys must be used to sign an unlocking script of a further blockchain Transaction in order to spend the output; and ii) logic arranged to provide a result based on: A) a determination of which of the plurality of associated private key(s) is/are used to sign the unlocking script, so as to provide an interim result: and B) a comparison of a parameter supplied via the unlocking script against the interim result. The method also comprises the step of attempting to spend the transaction output more than once, each attempt supplying a different parameter.",
    country: "WO",
    publicationDate: "2018-02-01T00:00:00.000Z",
    filingDate: "2017-07-21T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018020371A1",
    relevancyScore: 419.617
  },
  {
    id: "US-2018165416-A1",
    title:
      "Method for Providing Healthcare-Related, Blockchain-Associated Cognitive Insights Using Blockchains",
    abstract:
      "A method for providing healthcare-related, blockchain-associated cognitive insights comprising: receiving data from a plurality of data sources, at least some of the plurality of data sources comprising healthcare related data sources and blockchain data sources; processing the data from the plurality of data sources to provide a healthcare-related, blockchain-associated cognitive insight; and, providing the healthcare-related, blockchain-associated cognitive insight to a destination.",
    country: "US",
    publicationDate: "2018-06-14T00:00:00.000Z",
    filingDate: "2016-12-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180165416A1",
    relevancyScore: 418.744
  },
  {
    id: "US-2018220292-A1",
    title: "Blockchain-Based Subscription Management",
    abstract:
      "A subscription management application having a persistency layer and an API layer initiates a subscription transaction. The persistency layer is configured to store information about a subscription associated with the subscription transaction originating from a subscription blockchain. The API layer is configured to retrieve information from the subscription blockchain and to update the subscription blockchain in connection with the subscription transaction. After, the persistency layer of the subscription management application is accessed to determine, in real-time, whether the initiated subscription transaction can be completed. The subscription transaction is then completed if it is determined that the initiated subscription can be completed or it is aborted if it is determined that the initiated subscription cannot be completed. Related apparatus, systems, techniques and articles are also described.",
    country: "US",
    publicationDate: "2018-08-02T00:00:00.000Z",
    filingDate: "2017-01-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180220292A1",
    relevancyScore: 417.115
  },
  {
    id: "US-2018189333-A1",
    title: "Limiting blockchain size to optimize performance",
    abstract:
      "A blockchain may include various transactions which are identified and which require processing. The order of processing such transactions may be optimized by examining content of the transactions. One example operation may include one or more of identifying blockchain transactions, designating each of the blockchain transactions as an independent transaction type or a dependent transaction type, and determining an order to process the blockchain transactions based on the independent transaction type or the dependent transaction type.",
    country: "US",
    publicationDate: "2018-07-05T00:00:00.000Z",
    filingDate: "2017-01-03T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180189333A1",
    relevancyScore: 416.66
  },
  {
    id: "WO-2018126837-A1",
    title: "Blockchain-based data processing method, device and system",
    abstract:
      "Provided are a blockchain-based data processing method, device and system, the method comprising: a first device determines a block to be deleted in a blockchain network, the first device being a device in the blockchain network; the first device executes a deletion related operation, so as to delete the block to be deleted. The first device in the blockchain network executes the deletion related operation after determining the block to be deleted in the blockchain network, thereby deleting the block to be deleted. The present invention reduces the load in the blockchain network and the bandwidth required for blockchain transmission.",
    country: "WO",
    publicationDate: "2018-07-12T00:00:00.000Z",
    filingDate: "2017-12-07T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018126837A1",
    relevancyScore: 415.496
  },
  {
    id: "CN-107733651-A",
    title: "Blockchain generation method, node and system",
    abstract:
      "The invention discloses a blockchain generation method, a node and a system, which are used for solving a problem that in a blockchain system, an account keeping right is monopolized. The blockchain generation method comprises the steps of: acquiring generated node information of n blocks in a local blockchain of the node; according to a statistic result that nodes in the n blocks are used as generated node, determining a difficulty target of the node; constructing a new block, wherein a block head of the new block comprises a block head hash value of a father block of the new block, a randomnumber and the difficulty target ; and regulating the random number until the difficulty target is met, or regulating the random number until the node receives new block broadcast from other nodes, and adding the new block determined by the blockchain system into the local blockchain. Each node can be different in difficulty target, the difficulty target of the node can be dynamically regulated, and the account keeping right acquiring difficulty of the node is dynamically regulated, and thus, the problem that in the blockchain system, the account keeping right is monopolized.",
    country: "CN",
    publicationDate: "2018-02-23T00:00:00.000Z",
    filingDate: "2017-09-11T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107733651A",
    relevancyScore: 415.313
  },
  {
    id: "CN-107103480-A",
    title: "Supply chain management method based on sovereign blockchain",
    abstract:
      "The invention discloses a supply chain management method based on a sovereign blockchain. The method comprises establishing the sovereign blockchain based on national sovereignty and blockchain technology, establishing a supply chain management platform on the sovereign blockchain, establishing an enterprise supply chain blockchain general ledger service platform, an industry blockchain product certification center and a commodity traceability security authentication center on the supply chain management platform, acquiring supply chain-related information, and establishing a blockchain to be stored in the sovereign blockchain platform so as to connect various dispersive links in the supply chain and to achieve data storage, sharing and authentication in the supply chain through the blockchain.",
    country: "CN",
    publicationDate: "2017-08-29T00:00:00.000Z",
    filingDate: "2017-05-18T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107103480A",
    relevancyScore: 410.848
  },
  {
    id: "US-2018129958-A1",
    title: "Cognitive Session Graphs Including Blockchains",
    abstract:
      "A method, system and computer-usable medium for providing cognitive insights comprising receiving data from a plurality of data sources, the plurality of data sources comprising a blockchain data source, the blockchain data source providing blockchain data; processing the data from the plurality of data sources, the processing the data from the plurality of data sources performing data enriching to provide enriched data; generating the cognitive session graph, the cognitive session graph being associated with a session, the cognitive session graph comprising at least some enriched data; and, associating a cognitive blockchain with the cognitive session graph.",
    country: "US",
    publicationDate: "2018-05-10T00:00:00.000Z",
    filingDate: "2016-11-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180129958A1",
    relevancyScore: 409.215
  },
  {
    id: "CN-107480978-A",
    title: "Payment method based on blockchain technology",
    abstract:
      "The present invention provides a payment method based on blockchain technology, comprising the following steps: a user inputs his own information to generate a transaction request; and a merchant order system submits the transaction request to any node on the blockchain payment system. In this case, the node constitutes a receiving node; after the blockchain verifies the payment request, the verified payment request becomes blocks through a consensus algorithm, whereby the payment request is recorded onto the blockchain; and a prophetic system monitors the payment request on the blockchain of the matched node and transmits the payment request to a payment channel and the payment channel processes the payment request and returns the payment result to the prophetic system; and the prophet system returns the payment result to the blockchain through the matched blockchain node. After the payment result becomes blocks by the consensus algorithm, it is recorded on the block chain and notified to the merchant&#39;s transaction system, makingthe payment process completed. The present invention is conducive to the implementation of accurate, timely and more dimension of regulation, can solve the clearance between online e-commerce service platform and offline payment service providers.",
    country: "CN",
    publicationDate: "2017-12-15T00:00:00.000Z",
    filingDate: "2017-08-04T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107480978A",
    relevancyScore: 407.491
  },
  {
    id: "US-2018129954-A1",
    title: "Performing Compliance Operations Using Cognitive Blockchains",
    abstract:
      "A method, system and computer-usable medium for cognitive information processing comprising: receiving data from a plurality of data sources, the plurality of data sources comprising a blockchain data source, the blockchain data source providing blockchain data; processing the blockchain data to generate a plurality of knowledge elements; processing the blockchain data to generate cognitive blockchain data; storing the plurality of knowledge elements and the cognitive blockchain data within a cognitive graph; and, processing the plurality of knowledge elements to generate a cognitive insight associated with a compliance requirement.",
    country: "US",
    publicationDate: "2018-05-10T00:00:00.000Z",
    filingDate: "2016-11-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180129954A1",
    relevancyScore: 407.268
  },
  {
    id: "WO-2017187397-A1",
    title: "Operating system for blockchain iot devices",
    abstract:
      "The invention provides a generic operating system for coordinating, controlling and/or influencing the activities of a device. The invention is implemented using a blockchain platform with which the operating system is arranged to interact. The blockchain may be the Bitcoin blockchain. In a preferred embodiment, the device is an Internet of Things (IOT) device. The invention provides a computer-implemented control system and corresponding method for controlling a device, the system comprising a device configured for wireless communication with a network and having an IP address and a public-private key cryptographic key pair associated with the device; a software-implemented control component arranged to monitor the state of a blockchain network and/or transmit blockchain Transactions to the blockchain network; and a set of instructions arranged for execution by the control component to control the functionality of the device. The control component is arranged to access the set of instructions from a stored location which is separate to the device. The instructions may be stored in a Distributed Hash Table (DHT) and accessed for download and installation by the control component from the DHT as and when needed. The location of the DHT and/or instructions may be indicated or provided using metadata provided within a blockchain transaction. The set of instructions may be accessed by the control component using a look-up key which is related to a cryptographic key pair. The control component is provided on or in the device, or in other embodiments can be provided in an off-device location and arranged for wireless communication with the device.",
    country: "WO",
    publicationDate: "2017-11-02T00:00:00.000Z",
    filingDate: "2017-04-28T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2017187397A1",
    relevancyScore: 404.993
  },
  {
    id: "WO-2018020375-A1",
    title: "Blockchain-implemented method and system",
    abstract:
      "The computer-implemented invention provides a method and corresponding system for controlling access to and/or use of an internet-enabled resource. The invention uses an electronic ledger such as, for example, the Bitcoin blockchain. The resource may be an IoT device or system. Access to the resource is permitted or enabled upon provision of a cryptographic key e.g. a private key which corresponds to a public key which has been stored in memory. In one embodiment, the public key is stored in a DHT. Access to the resource is prevented or disabled by removing the public key from memory, and using a redeem script of a second blockchain Transaction to spend a tokenised output of a first blockchain Transaction. The second transaction detokenizes the token (or &#39;coloured coin&#39;) contained within the first Transaction. In order to prevent further access to the resource, an encrypted message is sent to the internet-enabled resource, wherein the message communicates a public key and the redeem script. The resource then checks whether the public key in the message matches that stored in memory and, if it does, removes the stored version of the public key from memory. The resource then uses the redeem script to perform the detokenization.",
    country: "WO",
    publicationDate: "2018-02-01T00:00:00.000Z",
    filingDate: "2017-07-21T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018020375A1",
    relevancyScore: 404.171
  },
  {
    id: "WO-2017155742-A1",
    title: "Data storage system with blockchain technology",
    abstract:
      "A blockchain processor may receive data associated with an interaction with a populated data storage system. The blockchain processor may hash a first previously entered data block at a first row address; combine the received data, the hash of the first previously entered data block, and the first row address into a data block; and store the data block.",
    country: "WO",
    publicationDate: "2017-09-14T00:00:00.000Z",
    filingDate: "2017-02-28T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2017155742A1",
    relevancyScore: 403.857
  },
  {
    id: "US-2018129957-A1",
    title: "Cognitive Session Graphs Including Blockchains",
    abstract:
      "A method, system and computer-usable medium for providing cognitive insights comprising receiving streams of data from a plurality of data sources; receiving data from a plurality of data sources, the plurality of data sources comprising a blockchain data source, the blockchain data source providing blockchain data; processing the data from the plurality of data sources, the processing the data from the plurality of data sources performing data enriching to provide enriched data; generating the cognitive session graph, the cognitive session graph being associated with a session, the cognitive session graph comprising at least some enriched data; and, associating a cognitive blockchain with the cognitive session graph.",
    country: "US",
    publicationDate: "2018-05-10T00:00:00.000Z",
    filingDate: "2016-11-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180129957A1",
    relevancyScore: 401.913
  },
  {
    id: "US-2018089256-A1",
    title: "Management Of Entitlements Using Blockchain",
    abstract:
      "Methods for managing entitlements of products and services using blockchain are described. One method includes the steps of storing by a blockchain fabric a ledger that stores transaction data, smart contracts that process transactions, creating an entitlement, receiving by the blockchain a create entitlement transaction request, adding, by the smart contract, an entitlement block to the ledger, issuing by the entitled product a usage transaction that reports usage of the entitled product, upon receiving the usage transaction, adding, by a smart contract, a usage block to the ledger, and determining, by the smart contract, that an entitlement limit has been reached. Another method describes a container mechanism that provides a way to identify all blocks associated with a base entitlement.",
    country: "US",
    publicationDate: "2018-03-29T00:00:00.000Z",
    filingDate: "2017-11-17T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180089256A1",
    relevancyScore: 398.44
  },
  {
    id: "WO-2017066002-A1",
    title: "Blockchain-based identity and transaction platform",
    abstract:
      "Systems, methods, and computer media implementing blockchain-based identity and transaction platforms are described herein. Identity information, such as a photo, for a person can be encrypted and stored in a blockchain as part of enrolling the person as a user in a blockchain- based identity and transaction platform. Trust relationships can be formed between the user and other users, and records of the trust relationships can also be stored in the blockchain. Transactions between the user and other users with whom the user has formed a trust relationship can also be stored in the blockchain. The transactions can be authorized, for example, through a multi-stage verification process that accesses information stored on the blockchain. The transactions and identity information, along with other information, contribute to an economic identity of the person.",
    country: "WO",
    publicationDate: "2018-08-22T00:00:00.000Z",
    filingDate: "2016-09-30T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2017066002A1",
    relevancyScore: 397.298
  },
  {
    id: "US-2018181979-A1",
    title: "Incentive-based crowdvoting using a blockchain",
    abstract:
      "An instant operation may include one or more of creating a smart contract identifying content and review requirements for performing a review of the content, signing and validating the smart contract, storing the smart contract in a blockchain, receiving content review feedback from one or more reviewers of the content, and amending the blockchain to include the content review feedback.",
    country: "US",
    publicationDate: "2018-06-28T00:00:00.000Z",
    filingDate: "2016-12-26T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180181979A1",
    relevancyScore: 396.592
  },
  {
    id: "CN-107480990-A",
    title: "Method and apparatus for Blockchain billing",
    abstract:
      "The embodiments of the present invention provide a method and an apparatus for Blockchain billing. The method includes: a billing node receives the transaction information and obtains a timestamp in the transaction information; and the billing node determines the validity of the transaction information or the previous block according to the timestamp, the issuing moment of the previous block, and the median value of the time information sent respectively by the various nodes in a Blockchain network contained in the previous block. According to the invention, based on the timestamp of the received transaction information, the issuing moment of the previous block and the median value of the time information sent respectively by the various nodes in a Blockchain network contained in the previous block, the validity of the transaction information or the previous block can be determined, which avoids the chaos or loss of account books caused by the chaos of time and avoids the deliberate concealment of transactions from hacker nodes. Therefore, transaction security using Blockchain can be ensured.",
    country: "CN",
    publicationDate: "2017-12-15T00:00:00.000Z",
    filingDate: "2017-08-01T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107480990A",
    relevancyScore: 396.328
  },
  {
    id: "US-2018107958-A1",
    title: "Blockchain expense and resource utilization optimization",
    abstract:
      "A blockchain configuration may require constant and large amounts of resources to maintain a growing structure. One example method of operation may include receiving blockchain transactions and creating a blockchain block, identifying miner devices to process the blockchain block, identifying expenses associated with each of the miner devices, selecting an optimal cost miner device among the miner devices based on the identified expenses associated with each of the miner devices, and assigning the optimal cost miner device to solve the blockchain block.",
    country: "US",
    publicationDate: "2018-04-19T00:00:00.000Z",
    filingDate: "2016-10-14T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180107958A1",
    relevancyScore: 395.429
  },
  {
    id: "WO-2018116230-A1",
    title: "Hybrid blockchain based record management system",
    abstract:
      "The system disclosed proposes a record keeping and verification platform using a Hybrid Blockchain network system that can store actual record data in Permissioned/Named Blockchains. The proposed system uses a globally distributed and a shared Shadowchain that is generated from the Blocks in the Permissioned/Named Blockchains containing only the block identification data like a Block header without the actual record data from the original Permissioned Blockchain blocks, thus providing a strong and tamper proof mechanism for trusting and verification of data stored in them. In an aspect, system disclosed proposes a hybrid model of Blockchain using Permissioned Blockchains to store the actual data on centrally controlled systems and shadowchains to store the metadata that can beglobally distributed across internet to anyone, thus providing utmost data privacy for the record producers and creators, and a decentralized trust based system to verify the integrity of the record data to record consumers.",
    country: "WO",
    publicationDate: "2018-06-28T00:00:00.000Z",
    filingDate: "2017-12-21T00:00:00.000Z",
    url: "https://patents.google.com/patent/WO2018116230A1",
    relevancyScore: 394.932
  },
  {
    id: "US-2018152289-A1",
    title: "Checkpoints for permissionless blockchains",
    abstract:
      "A certified checkpoint is provided for a ledger comprising a blockchain and a world state. The certified checkpoint enables a third party to recognize and verify that the ledger has integrity, a known starting state, and immutability properties starting at a specific point in time. Certification means that all of the validating peers reached consensus on the state of the ledger at that point in time. Thus, the certified checkpoint state represents an agreed-upon state, and that one or more subsequent operations on the ledger are relative to that agreed-upon state. Preferably, before a checkpoint is certified, it must be consistent, meaning that all validating peers have reached the same value for the checkpoint. Preferably, the checkpoint is a compression of the current blockchain world state into a compact representation (e.g., a hash) of the ledger that based on an agreed-upon consensus protocol is consistent across the (validating) peers. The approach also is extended to a permissionless blockchain.",
    country: "US",
    publicationDate: "2018-05-31T00:00:00.000Z",
    filingDate: "2017-06-26T00:00:00.000Z",
    url: "https://patents.google.com/patent/US20180152289A1",
    relevancyScore: 394.804
  },
  {
    id: "CN-107332826-A",
    title: "Communication method and device for blockchain agent node",
    abstract:
      "The embodiment of the invention provides a communication method and device for a blockchain agent node. The method comprises the steps that: the agent node receives an encrypted transfer request sent by a sub node; the transfer request is sent to a blockchain network; and blockchain information sent by the blockchain network is received, and a transaction record of the sub node in the blockchain information is sent to the sub node. According to the embodiment of the invention, the encrypted transfer request sent by the sub node is received by the agent node, the transfer request is sent to the blockchain network, the blockchain information sent by the blockchain network is received, and the transaction record of the sub node in the blockchain information is sent to the sub node; and the sub node sends the transfer request to one agent node of the sub node, the agent node simultaneously records the request, and only after an integral blockchain approves the transaction, a new block is generated and the new block is sent to the agent node, the agent node records the transaction information, so that the problems of confidence and safety of transaction in a blockchain are solved.",
    country: "CN",
    publicationDate: "2017-11-07T00:00:00.000Z",
    filingDate: "2017-06-09T00:00:00.000Z",
    url: "https://patents.google.com/patent/CN107332826A",
    relevancyScore: 394.763
  }
];

const getDate = x => {
  return `${x.getFullYear()}-${x.getMonth() + 1}-1`;
};

let p = patents.map(x => ({
  ...x,
  date: getDate(new Date(x.publicationDate))
}));

let counts = {};
for (let patent of p) {
  counts[patent.date] = ++counts[patent.date] || 1;
}

let newP = Object.entries(counts).map(([date, count]) => ({ count, date }));
let mva = newP[0].count;

newP = newP
  .map(x => ({ ...x, date: new Date(x.date) }))
  .sort((a, b) => a.date - b.date);

const avg = arr => arr.reduce((a, b) => a + b) / arr.length;

const MOVING_WINDOW_LEGNTH = 3;
let startingAvg = avg(newP.map(x => x.count).slice(0, MOVING_WINDOW_LEGNTH));

for (let i = 0; i < MOVING_WINDOW_LEGNTH; i++) {
  let item = newP[i];
  item.mva = startingAvg;
}

for (let i = MOVING_WINDOW_LEGNTH; i < newP.length; i++) {
  let item = newP[i];
  let newAvg = avg(newP.map(x => x.count).slice(i - MOVING_WINDOW_LEGNTH, i));
  item.mva = newAvg;
}

const mean = avg(newP.map(x => x.count));
const vals = newP.map(x => x.count);
const std =
  vals.map(x => (x - mean) ** 2).reduce((a, b) => a + b) / vals.length;
const zScore = x => (x - mean) / mean;

newP = newP.map(x => ({ ...x, zScore: zScore(x.count) }));

// newP = newP.map((x, i) => {
//   console.log(mean);
//   mean = (mean + x.count) / (i + 1);
//   return { ...x, mean };
// });

const gData = newP;
