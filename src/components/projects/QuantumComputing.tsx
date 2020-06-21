import React, {Component} from "react";

class QuantumComputing extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#/projects">Projects</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Quantum Computing in Python</li>
                    </ol>
                </nav>

                <h1>Quantum Computing in Python</h1>
                <p>This uses the QISKIT in python, it's just the files i made while messing around with the code back in 2017</p>

                <h2>Table of Contents</h2>
                <ul>
                    <li>Installation</li>
                    <li>First Program</li>
                    <li>Extra Resources</li>
                    <li>Contact Me</li>
                </ul>

                <h2>Installation</h2>

                <p>To install it you need to:</p>
                <ul>
                    <li> install QISKIT via <a href={"https://pypi.org/project/pip/"}>pip</a>:
                        <code>{`
pip install qiskit
                        `}
                        </code>
                    </li>

                    <li>
                        Then create an account on the <a href={"https://quantumexperience.ng.bluemix.net/qx/experience"}>IBM Experience Website</a>
                    </li>
                </ul>


                <h2>First Program</h2>
                <p>You can find this program here:</p>
                <ul>
                    <li><a href={"https://github.com/sp1d5r/Quantum-Computing-Python-/blob/master/Exploring%20Quantum%20Registers%20and%20Qubits.py"}>Exploring Quantum Registers and Qubits</a></li>
                </ul>

                <pre>
                    <code>
                        {`
#////////////////////////////////////////
#////////////////////////////////////////
#////////Elijah Ahmad -- @SP1D5R//////////
#////////////////////////////////////////
#////////////////////////////////////////

from qiskit import QuantumProgram

QP = QuantumProgram()     #Definine QuantumProgram as pq
QR = QP.create_quantum_register('QR', 2) #Defining a Quantum Register With 2 Qubits
CR = QP.create_classical_register('CR',2) #Defining a Classical Register With 2 bits
QC = QP.create_circuit('QC', [QR], [CR]) #Creating a Quantum Circuit named as QC and passing it through the QuantumRegister (QR) and the ClassicalRegister (CR)


#//////////////////////
#//////////////////////
#Creating components of the objects just creates and store them in variables
#//////////////////////
#//////////////////////


Circuit = QP.get_circuit('QC') #Create a variable named Circuit and its the quantum program object and the method in the object is called get_circuit and the circuit we are getting is teh QuantumCircuit (QC)
Quantum_R = QP.get_quantum_register('QR') # Create a variable named quantum register and thats holding the results of running the get_quantum_register on the QuantumRegister
Classical_R = QP.get_classical_register('CR') # Does the same thing as above but for the classical register


#We can add operators to the circuit i.e. gates, joins, nots and things... the gates can simulate an applied magnetic field to a wave function which can collapse it in a certain direction once measured


Circuit.x(Quantum_R[0]) #on line 11 we defined that there are 2 qubits on the quantum register but its zero origon indexed so we will do it on the first one, and we are doing a measuremnt on the x
Circuit.y(Quantum_R[1]) # now we are doing a measurment on the y.

Circuit.cx(Quantum_R[0], Quantum_R[1]) #we are running a controlled not gate (cx)


# now we take a measurement of that and compare it to the classical one
Circuit.measure(Quantum_R[0], Classical_R[0])
Circuit.measure(Quantum_R[1], Classical_R[1])

QC.measure(QR, CR)

#setting the backend

Backend = 'local_qasm_simulator'
Circuits = ['QC']
# pass that through a variable named results which will run and compile the circuits
Result = QP.execute(Circuits, Backend, wait = 2, timeout = 240)
print(Result)  #print that the circuit has been completed
Result.get_counts('QC')
OUT = Result.get_ran_qasm('QC')
print(OUT)


''' The Output
1.  COMPLETED
2.  OPENQASM 2.0;
3.  include "qelib1.inc";
4.  qreg QR[2];
5.  creg CR[2];
6.  u3(3.14159265358979,1.57079632679490,1.57079632679490) QR[1];
7.  u3(3.14159265358979,0,3.14159265358979) QR[0];
8.  cx QR[0],QR[1];
9.  measure QR[0] -> CR[0];
10. measure QR[1] -> CR[1];
'''

# line 1. shows the COMPLETED as the result from line 46
# We got out expectation values from line 49 in line 6. is pi, pi/2, pi/2
# And for the first Quantum bit we got pi, pi/0, pi/1
                        `}
                    </code>
                </pre>

                <h2>Extra Resources</h2>

                <ul>
                <li><a href={"https://github.com/QISKit"}>QISKIT</a></li>
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

export default QuantumComputing;