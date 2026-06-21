// custom_blocks.ts
// EaglerForge & Server Builder Custom Block Definitions

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

// --- DIMENSIONS ---
Blockly.Blocks['dimension_register_new'] = {
  init: function() {
    this.appendValueInput("DIM_ID").setCheck("Number").appendField("Register Dimension ID");
    this.appendValueInput("DIM_NAME").setCheck("String").appendField("Name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2c3e50");
  }
};
Blockly.JavaScript['dimension_register_new'] = function(block: any) {
  var dim_id = Blockly.JavaScript.valueToCode(block, 'DIM_ID', Blockly.JavaScript.ORDER_ATOMIC);
  var dim_name = Blockly.JavaScript.valueToCode(block, 'DIM_NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return `ModAPI.registerDimension(${dim_id}, ${dim_name});\n`;
};

// --- SOUND & MEDIA ---
Blockly.Blocks['sound_play_at_pos'] = {
  init: function() {
    this.appendValueInput("SOUND_NAME").setCheck("String").appendField("Play Sound");
    this.appendValueInput("POS").setCheck("BlockPos").appendField("at Position");
    this.appendValueInput("VOLUME").setCheck("Number").appendField("Volume");
    this.appendValueInput("PITCH").setCheck("Number").appendField("Pitch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f1c40f");
  }
};
Blockly.JavaScript['sound_play_at_pos'] = function(block: any) {
  var sound = Blockly.JavaScript.valueToCode(block, 'SOUND_NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var pos = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC);
  var vol = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  var pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_ATOMIC);
  return `ModAPI.world.playSoundEffect(${pos}.x, ${pos}.y, ${pos}.z, ${sound}, ${vol}, ${pitch});\n`;
};

// --- MODELS & TEXTURES ---
Blockly.Blocks['render_override_item_model'] = {
  init: function() {
    this.appendValueInput("ITEM").setCheck("Item").appendField("Override Model for Item");
    this.appendValueInput("MODEL_JSON").setCheck("String").appendField("with JSON");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9b59b6");
  }
};
Blockly.JavaScript['render_override_item_model'] = function(block: any) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
  var json = Blockly.JavaScript.valueToCode(block, 'MODEL_JSON', Blockly.JavaScript.ORDER_ATOMIC);
  return `ModAPI.render.overrideItemModel(${item}, ${json});\n`;
};

// --- ANIMATIONS ---
Blockly.Blocks['anim_apply_recoil'] = {
  init: function() {
    this.appendValueInput("INTENSITY").setCheck("Number").appendField("Apply Camera Recoil");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3498db");
  }
};
Blockly.JavaScript['anim_apply_recoil'] = function(block: any) {
  var intensity = Blockly.JavaScript.valueToCode(block, 'INTENSITY', Blockly.JavaScript.ORDER_ATOMIC);
  return `ModAPI.player.camera.applyRecoil(${intensity});\n`;
};

// --- PROJECTILES & HITSCAN ---
Blockly.Blocks['combat_fire_hitscan'] = {
  init: function() {
    this.appendValueInput("DAMAGE").setCheck("Number").appendField("Fire Hitscan | Damage");
    this.appendValueInput("RANGE").setCheck("Number").appendField("Max Range");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e74c3c");
  }
};
Blockly.JavaScript['combat_fire_hitscan'] = function(block: any) {
  var dmg = Blockly.JavaScript.valueToCode(block, 'DAMAGE', Blockly.JavaScript.ORDER_ATOMIC);
  var range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_ATOMIC);
  return `ModAPI.combat.fireHitscan(ModAPI.player, ${dmg}, ${range});\n`;
};
