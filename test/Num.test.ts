/*

import { MatrixCloner } from '../src'
import { Scene } from "@babylonjs/core/scene";
import { Engine } from '@babylonjs/core/Engines';
import {  MeshBuilder } from "@babylonjs/core/Meshes/";
import {describe, expect, test} from '@jest/globals';
import { Cloner } from '../src/core';



const canvas = document.createElement('canvas')
const engine = new Engine(canvas)
const scene = new Scene(engine)
const box = MeshBuilder.CreateBox("box", {},scene);

*/

test('type', () => {
  expect( 5).toBe(5)
})



/*
test('type', () => {
  expect( new MatrixCloner([box], scene, {
    mcount: { x: 30, y: 30, z: 10 },
  })).toBe(typeof MatrixCloner)
})
/*
test('toString', () => {
  expect(new Num(5).toString()).toBe('5')
})

test('addAll', () => {
  expect(Num.addAll([new Num(5), new Num(2), new Num(13)]).val()).toBe(20)
})
*/