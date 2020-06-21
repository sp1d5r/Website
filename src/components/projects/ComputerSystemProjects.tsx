import React, {Component} from "react";
import {Jumbotron, Container, Image, Row, Col} from "react-bootstrap";

class ComputerSystemProjects extends React.Component {
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
                        <li className="breadcrumb-item active" aria-current="page">Computer System Projects</li>
                    </ol>
                </nav>
                <h1>Computer System Projects</h1>
                <p>-- This is built for the students at Imperial College London --

                    A series of programs written in Haskell and Java to help better your understanding of the intro to computer systems module (112) as well as your Haskell and Java modules (120.1 and 120.2 respectively).

                    To improve your understanding of Haskell lots of higher order functions will be used, I encourage you to try to understand how each function is working.

                    Notes for 112 are not available in this page, to get these notes please ask your Computer Systems teacher.</p>

                <h2>Table of Contents</h2>
                <ul>
                    <li>Topic 1: Number Representation</li>
                    <li>Topic 2: Radix Arithmetic</li>
                    <li>Topic 3: Floating Point Representation</li>
                    <li>Topic 4: Boolean Algebra, Gates, IC's, and Boolean Functions</li>
                    <li>Topic 5: Canonical Forms and Karnaugh Maps</li>
                    <li>Topic 6: Combinatorial Circuits</li>
                    <li>Topic 7: Time Dependant Behaviour of Digital Circuits and Feedback</li>
                    <li>Topic 8: Sequential Circuits and Flip Flops</li>
                    <li>Topic 10: Finite State Representation of Digital Circuits</li>
                    <li>Topic 11: Traffic Lights (Example)</li>
                    <li>Topic 12: Registers</li>
                    <li>Topic 13: Multiplexers, Decoders, Comparators etc</li>
                    <li>Topic 14: Arithmetic</li>
                    <li>Topic 15 Manual Processors</li>
                    <li>Topic 16: 32 Bit Computer Architecture</li>
                    <li>Topic 17: 32 Bit Computer Sequencing</li>
                    <li>Additional Resources</li>
                </ul>

                <h2>Number Representation</h2>
                <p>Unit 1 of this module, is all about converting the bases (radices) of number systems, i.e. Binary to
                    Decimal /Base 2 to Base 10. Check the code source files to see how you would program these while
                    incorporating higher order functions.</p>
                <ul>
                    <li><a href={"https://github.com/sp1d5r/Computer-Systems-Projects/blob/master/HaskellCode/NumberRepresentation.hs"}>Haskell Source Code</a></li>
                    <li><a href={"https://github.com/sp1d5r/Computer-Systems-Projects/blob/master/JavaCode/NumberRepresentation.java"}>Java Source Code</a></li>
                </ul>

                <p>Haskell Code for Converting decimal numbers into binary numbers using Division (line 25) :</p>
                <pre><code>{`
decToBin :: Int -> Int
decToBin dec
  = foldr1 (+) $ zipWith (*) binaryArray ( take (length binaryArray) $ iterate (*10) 1)
  where
  binaryArray = decToBin' dec
  decToBin' :: Int -> [Int]
  decToBin' dec
   | quotient /= 0      = remainder : decToBin' quotient
   | otherwise          = remainder : []
   where
   (quotient, remainder) = quotRem dec 2
                `}</code></pre>

                <p>Haskell Code for Converting decimal numbers into binary numbers using Subtraction (line 50) :</p>
                <pre><code>{`
decToBin1 :: Int -> Int
decToBin1 dec
  = foldr1 (+) $ zipWith (*) binaryArray (reverse $ take (length binaryArray)  (iterate (*10) 1))
  where
  binaryArray = decToBin1' dec powersOf2
  powersOf2 = reverse $ takeWhile (<= dec) $ iterate (*2) 1
  decToBin1' :: Int -> [Int] -> [Int]
  decToBin1' dec []
    = []
  decToBin1' dec (x:xs)
    | x <= dec            = 1 : decToBin1' (dec - x) xs
    | otherwise           = 0 : decToBin1' dec xs`}</code></pre>


                <p>Haskell Code for Converting decimal numbers into octal numbers (line 70):</p>

                <pre><code>{`
decToOct :: Int -> Int
decToOct 0
  = 0

decToOct dec
  = foldr1 (+) $ zipWith (*) octalArray (reverse $ take (length octalArray)  (iterate (*10) 1))
    where
    octalArray = decToOct' dec powersOf8
    powersOf8 = reverse $ takeWhile (<= dec) $ iterate (*8) 1
    decToOct' :: Int -> [Int] -> [Int]
    decToOct' dec []
      = []
    decToOct' dec (x:xs)
      | x <= dec            =  (quot dec x) : decToOct' (mod dec x) xs
      | otherwise           = 0 : decToOct' dec xs
                `}</code></pre>

                <p>Haskell Code for converting decimal numbers into hexadecimal values (line 89):</p>
                <pre><code>{`
decToHex :: Int -> [Char]
decToHex 0
  = "0"

decToHex dec
  = hexArray
    where
    integerHexArray = decToBin1' dec powersOf16
    hexArray = map (\\x -> if x<10 then intToDigit x else chr (x + (ord 'A' - 10))) integerHexArray
    powersOf16 = reverse $ takeWhile (<= dec) $ iterate (*16) 1
    decToBin1' :: Int -> [Int] -> [Int]
    decToBin1' dec []
      = []
    decToBin1' dec (x:xs)
      | x <= dec            =  (quot dec x) : decToBin1' (mod dec x) xs
      | otherwise           = 0 : decToBin1' dec xs
                `}</code></pre>

                <p>Haskell Code for converting binary numbers into decimal numbers (line 134):</p>
                <pre><code>{`
binToDec :: Int -> Int
binToDec value
  = foldr1 (+) $ zipWith (*) arrayValue powOf2
  where
  arrayValue = intToInts value
  powOf2 = reverse $ take (length arrayValue) $ iterate (*2) 1
                `}</code></pre>

                <p>Haskell Code for converting binary numbers into octal numbers (line 145):</p>
                <pre><code>{`
binToOct :: Int -> Int
binToOct binValue
  = intsToInt $ binToOct' binArray
  where
  binArray = intToInts binValue
  binToOct' :: [Int] -> [Int]
  binToOct' binValue
    | (length binValue) >= 3       = binToOct' firstPart  ++ [binToDec $ intsToInt lastThree]
    | otherwise                    = [binToDec $ intsToInt binValue]
    where
    (firstPart, lastThree) = splitAt ((length binValue) - 3) binValue
                `}</code></pre>


                <h2>Radix Arithmetic</h2>
                <p>Unit 2 of this module is about radix arithmetic, this involves radix addition, subtraction, Unlike
                    the code for the topic 1 this will not focus on particular bases instead you will be allowed to
                    input the required base you would like. Please see the code for more detail.</p>

                <p>Check the code source files to see how you would program these while incorporating higher order functions.</p>
                <ul>
                    <li><a href={"https://github.com/sp1d5r/Computer-Systems-Projects/blob/master/HaskellCode/RadixArithmetic.hs"}>Haskell Source Code</a></li>
                </ul>
                <p>Haskell code for radix Arithmetic:</p>
                <pre><code>{`
radixAddition :: (Int, Int, Int) -> Int
radixAddition (fstValue, sndValue, base)
  | length1 > length2     = radixAddition (intValue1, (intsToInt $ replicate (length1 - length2) 0 ++ value2Digs), base)
  | length2 > length1     = radixAddition ((intsToInt $ replicate (length2 - length1) 0 ++ value2Digs), intValue2, base)
  | otherwise             = case radixAddition' value1Digs value2Digs of
                                 (0, zs) -> intsToInt zs
                                 (x, zs) -> intsToInt (x:zs)
  where
  (value1Digs, value2Digs)  = (intToInts fstValue, intToInts sndValue)
  (length1, length2) = (length value1Digs, length value2Digs)
  intValue1 = intsToInt value1Digs
  intValue2 = intsToInt value2Digs

  -- Helper Function radixAddition' [firstList] [SecondList]
  radixAddition' :: [Int] -> [Int] -> (Int, [Int])
  radixAddition' [] []
    = (0, [])
  radixAddition' (x:xs) (y:ys)
    = (carry', a:as)
    where
    (carry, as) = radixAddition' xs ys
    (carry', a) = quotRem (x + y + carry) base
                `}</code></pre>

                <p>Haskell code for radix subtraction:</p>
                <pre><code>{`
radixSubtraction :: (Int, Int, Int) -> Int
radixSubtraction (fstValue, sndValue, base)
  = case radixSubtraction' value1Digs value2Digs' of
                                 (x, zs) -> intsToInt zs
  where
  (value1Digs, value2Digs)  = (intToInts fstValue, intToInts sndValue)
  (length1, length2) = (length value1Digs, length value2Digs)
  value2Digs'  = replicate (length1 - length2) 0 ++ value2Digs

  -- Helper Function: radixSubtraciton' (fistDigits, SecondDigits, Carry)
  radixSubtraction' :: [Int] -> [Int] -> (Int, [Int])
  radixSubtraction' [] []
    = (0, [])
  radixSubtraction' (x:xs) (y:ys)
    = (carry, z:zs)
    where
    (carry', zs) = radixSubtraction' xs ys
    carry = if (y > (x-carry')) then 1 else 0
    z = if ( y > (x - carry')) then (((x-carry') + (base)) - y) else ((x-carry')-y)
                `}</code></pre>

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

export default ComputerSystemProjects;