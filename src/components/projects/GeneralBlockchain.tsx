import React, {Component} from "react";

class GeneralBlockchain extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#/projects">Projects</a></li>
                        <li className="breadcrumb-item active" aria-current="page">General Blockchain</li>
                    </ol>
                </nav>
                <h1 id="GeneralBlockChain">General Blockchain</h1>

                <p>
                    This is a template for a general purpose blockchain I made, It's pretty useless as of now but it's a
                    proof of concept
                </p>

                <h2>Table of Contents</h2>
                <ul>
                    <li>The Code</li>
                    <li>Web App Initialisation</li>
                    <li>Interacting with the Web App</li>
                    <li>Running the App</li>
                    <li>Contact Me</li>
                </ul>


                <h2>
                    The Code
                </h2>

                <pre>
                    <code>{`
import datetime          # required because each block will have a timestamp (exact date block was created) 
import hashlib           # this will hash the block
import json              # encode the blocks before we use them
from flask import Flask, jsonify       #the Flask will be used as the web application, jsonify will return the messages from postman

# Building the BlockChain
# This will be a decentralised network so we need to build a class.
class Blockchain :
def __init__(self):
    #initialising the chain
    self.chain = []
    # We will need to create a genesis block (this is the first block)
    # createBlock is function, the two parameters proof and previous hash are both arbitrary
    self.createBlock(proof = 1, previousHash = '0')
    #TODO:// create a createBlock Function ^^


    #The parameters Proof is needed for the proof of block function defined later
    #Thats because it will be called right after a block is mined
    #The next argument will link the previous block to the current block.
    def createBlock(self, proof, previousHash):
        #defining a block dictionary for each block that has four essential keys:
        #1) the index of the block            :this is the length of the block chain in essence
        #2) the timestamp of the block        :the date the block was created
        #3) the proof of the block            :this is the proof that we get after solving the work
        #4) the previous hash                 :this will be the hash of the previous value.
        #5) the data of the block (optional)
        block = {'index': len(self.chain) + 1,
                        'timestamp': str(datetime.datetime.now()),
                        'proof': proof,
                        'previousHash': previousHash
                        #add the data you want
                    }
                    #Now append the block to the chain
        self.chain.append(block)
        return block

        #Defining the value of the getLastBlock (at the end of the block)
        def getLastBlock(self):
            #This will return the last block of the chain, so just write [-1] in the array value.
            return self.chain[-1]

        #We need a problem thats difficult to solve but easy to prove, so that the miners can mine them
        #If I want to build a cryptocurrency from it, it must be valuable so people don't just keep minng them.
        #This function will define the problem, verify its proof and make other people aware of it's solution
        def proofOfWork(self, previousProof):
            #We need to introduce a new proof
            #We are solving the problem using a trial and error method.
            newProof = 1 #this number will iterate until the proof is solved
            checkProof = False  # this has to be set as False before the iteration begins.
            #defining the while loop for the problem
            while (checkProof != True):
                #This is a Problem we need to solve, this problem will be the SHA256 HASH function combined to the
                #hex digest function to return a string of 64 characters. the string will need to start with
                #leading zeros
                ''' the more leading zeros the more difficult the mining will be'''
                #the hashOperation will be a string of double length containing hexadecimal characters
                #this operation must be unsymmetrical (to prevent loops)
                hashOperation = hashlib.sha256(str(newProof**2 - previousProof**2).encode()).hexdigest() #this just adds a b
                #to see if the miner gets the hash with the correct number of leading 0's
                if hashOperation[:4] == '0000':
                    #when the operation is complete the proof is completed
                    checkProof = True
                else:
                        newProof += 1
                return newProof
            #We need to check that everything is functioning properly
            #We need to check the previous hash of the previous block is the same as the hash in the previous block
            #But to do those things we need to make a Hash function
            def hash(self, block):
                #needs to input the argument, then output the SHA256HASH
                #We need to hash a block in the block chain, its a dictionary of 4 keys
                #We are going to use the json library and make it a string
                encodedBlock = json.dumps(block, sort_keys = True).encode()
                return hashlib.sha256(encodedBlock).hexdigest()
            #this function returns the cryptographic hash of our block
            #this will iterate throuhg all the blocks and check them induviually
            def validateChain(self, chain):
                #state the genisis block
                previousBlock = chain[0]
                blockIndex =  1
                #now we need to loop through all the blocks
                while blockIndex < len(chain):
                    #get the blockIndex
                    block = chain[blockIndex]
                    if block['previousHash'] != self.hash(previousBlock):
                        #this is if we find an exception in the block chain
                        return False
                    previousProof = previousBlock['proof']
                    proof = block['proof']
                    hashOperation = hashlib.sha256(str(proof**2 - previousProof**2).encode()).hexdigest()
                    if hashOperation[:4] != '0000':
                        return False
                    previousBlock = block
                    blockIndex += 1

                return True

                    `}</code>
                </pre>

                <h2 id={"web-app-initialisation"}> Web App Initialisation</h2>
                <p> The next step was to create a web app using Flask to interact with the blockchain  </p>

                <pre>
                    <code>
                        {`
#Mining the same BlockChain

#We need a Web App to interact with it
#this defines the web app
app = Flask(__name__)


#Creating a block chain using the class above
blockchain = Blockchain()
                        `}
                    </code>
                </pre>

                <h2 id={"nteration"}>Interacting with the Web App</h2>
                <p>this will create generate the webapp and allow you to interact with it in the flask user interface</p>
                <pre>
                    <code>
                        {`
#Mine a new block for our blockchain
#We need to create a URL that will mine the block 
#we need to define a http method. we need to make a get request to get a new block 
@app.route('/mineBlock', methods = ['GET']) 
def mineBlock():
    #this function has to mine a block
    #So it has to solve a problem.
    #This will return the proof
    #in order to get the proof we need to get the previous proof from the previous block 
    previousBlock = blockchain.getLastBlock()
    previousProof = previousBlock['proof']
    proof = blockchain.proofOfWork(previousProof)
    #now we need to create a new block 
    previousHash = blockchain.hash(previousBlock)
    block = blockchain.createBlock(proof, previousHash)
    response = {'message':'Congrats you just mined a block!',
                'index': block['index'],
                'timestamp': block['timestamp'],
                'proof': block['proof'],
                'previousHash': block['previousHash']
                }
    return jsonify(response), 200 

#now we need to make a get request to get the full blockchain
@app.route('/getChain', methods = ['GET']) 
def getChain():
    #this next function needs to retrieve the entire chain so it is practicle to use the previously defined array
    #and it will also output the chain length once the chain gets larger. 
    response = {'chain': blockchain.chain,
                'chainLength': len(blockchain.chain)
                }
    
    return jsonify(response), 200 


#Running the web app
app.run(host = '0.0.0.0', port = 5000)  
                        `}
                    </code>
                </pre>

                <h2 id={"running-the-app"}>Running the Web App</h2>
                <p>to open up the webapp you need to open the Flask User Interface </p>
                <ul>
                    <li> Then in the URL type in:
                    <pre> {`
                    http://127.0.0.1:5000
                    `}</pre>
                    </li>

                    <li> Then to grab the chain type in:
                    <pre>{`
                    http://127.0.0.1:5000/getChain
                    `}
                    </pre>
                    </li>

                    <li> Then to mine the chain type in:
                    <pre>{`
                    http://127.0.0.1:5000/mineBlock
                    `}
                    </pre>

                    </li>

                </ul>

                <h2>Contact Me</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/elijah-ahmad-658a2b199/">Linkden - Elijah Ahmad</a></li>

                    <li><a href="https://www.facebook.com/elijah.ahmad.71">FaceBook - Elijah Ahmad</a></li>

                    <li><a href="https://www.instagram.com/ElijahAhmad__">Instagram - @ElijahAhmad__</a></li>

                    <li><a href="https://www.snapchat.com/add/elijah.ahmad">Snapchat - @Elijah.Ahmad</a></li>
                </ul>
            </div>
            );
    }


}

export default GeneralBlockchain;