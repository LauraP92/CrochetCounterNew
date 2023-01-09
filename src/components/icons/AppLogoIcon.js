import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from './IconProps';
import React, {FC, useEffect, useRef, useState} from 'react';

const AppLogoIcon = ({color, size, style}) => {
  const ratio = 121 / 42;
  return (
    <Svg
      width={size}
      height={size && size / ratio}
      viewBox="0 0 121 42"
      fill="none"
      style={style}>
      <G clipPath="url(#a)" fill="#fff">
        <Path d="M20.743 41.048c-2.923 0-5.558-.427-7.904-1.28-2.347-.832-4.352-2.037-6.016-3.616-1.643-1.6-2.902-3.53-3.776-5.792-.875-2.261-1.312-4.81-1.312-7.648 0-3.179.458-6.09 1.376-8.736.938-2.645 2.304-4.928 4.096-6.848 1.813-1.941 4.021-3.435 6.624-4.48 2.602-1.045 5.578-1.568 8.928-1.568 1.706 0 3.274.181 4.704.544 1.45.341 2.698.8 3.744 1.376 1.066.576 1.888 1.216 2.464 1.92.597.704.896 1.419.896 2.144 0 .875-.235 1.525-.704 1.952-.47.427-1.046.64-1.728.64a3.156 3.156 0 0 1-1.536-.384 33.944 33.944 0 0 0-1.632-.864c-.64-.341-1.483-.64-2.528-.896-1.046-.256-2.41-.384-4.096-.384-1.408 0-2.795.299-4.16.896-1.366.597-2.592 1.493-3.68 2.688-1.088 1.173-1.963 2.635-2.624 4.384-.64 1.728-.96 3.733-.96 6.016 0 1.728.224 3.381.672 4.96.448 1.579 1.13 2.987 2.048 4.224.938 1.216 2.122 2.176 3.552 2.88 1.43.704 3.125 1.056 5.088 1.056 1.493 0 2.773-.192 3.84-.576 1.066-.405 1.984-.875 2.752-1.408a49.011 49.011 0 0 1 2.08-1.376c.618-.405 1.216-.608 1.792-.608 1.13 0 1.91.267 2.336.8.426.512.64 1.237.64 2.176 0 .96-.363 1.91-1.088 2.848-.726.917-1.76 1.75-3.104 2.496-1.323.747-2.902 1.344-4.736 1.792-1.835.448-3.85.672-6.048.672ZM42.215 17.312c-.232 0-.44-.048-.624-.144a1.714 1.714 0 0 1-.504-.372 3.06 3.06 0 0 1-.396-.564 7.535 7.535 0 0 1-.396-1.056c-.12-.4-.224-.816-.312-1.248-.08-.44-.14-.876-.18-1.308-.04-.432-.06-.832-.06-1.2 0-1.304.244-2.408.732-3.312a4.873 4.873 0 0 1 2.112-2.064c.92-.472 2.024-.708 3.312-.708.544 0 1.064.04 1.56.12.504.08.952.2 1.344.36.392.152.7.344.924.576.232.224.348.484.348.78 0 .24-.052.436-.156.588a.878.878 0 0 1-.408.312c-.16.064-.328.096-.504.096-.368 0-.772-.06-1.212-.18-.432-.128-.996-.192-1.692-.192-1.048 0-1.836.324-2.364.972-.52.648-.78 1.528-.78 2.64 0 .4.02.788.06 1.164.04.368.088.724.144 1.068.056.336.112.648.168.936.056.288.1.544.132.768.04.224.06.408.06.552 0 .496-.112.856-.336 1.08-.216.224-.54.336-.972.336Zm15.99.324c-.928 0-1.824-.104-2.688-.312a7.113 7.113 0 0 1-2.304-.996 4.945 4.945 0 0 1-1.596-1.776c-.392-.736-.588-1.632-.588-2.688 0-1.16.188-2.172.564-3.036.384-.872.912-1.596 1.584-2.172a6.67 6.67 0 0 1 2.328-1.308 8.937 8.937 0 0 1 2.844-.444c.912 0 1.804.116 2.676.348a7.206 7.206 0 0 1 2.352 1.092 5.324 5.324 0 0 1 1.656 1.932c.416.784.624 1.732.624 2.844 0 .84-.172 1.648-.516 2.424a6.342 6.342 0 0 1-1.476 2.088c-.64.608-1.42 1.092-2.34 1.452-.912.368-1.952.552-3.12.552Zm-.108-2.652c.816 0 1.508-.124 2.076-.372.568-.256 1.028-.588 1.38-.996.36-.416.62-.868.78-1.356a4.44 4.44 0 0 0 .252-1.452c0-.672-.132-1.24-.396-1.704a3.151 3.151 0 0 0-1.032-1.14 4.334 4.334 0 0 0-1.428-.624 6.469 6.469 0 0 0-1.62-.204c-.72 0-1.4.156-2.04.468a3.73 3.73 0 0 0-1.56 1.392c-.392.616-.588 1.396-.588 2.34 0 .768.156 1.428.468 1.98.32.544.792.96 1.416 1.248.624.28 1.388.42 2.292.42ZM73.97 17.72a8.8 8.8 0 0 1-2.676-.396 6.489 6.489 0 0 1-2.184-1.152 5.476 5.476 0 0 1-1.476-1.896c-.352-.76-.528-1.644-.528-2.652 0-1.056.168-2 .504-2.832a5.936 5.936 0 0 1 1.428-2.136 6.158 6.158 0 0 1 2.244-1.344c.88-.312 1.852-.468 2.916-.468.824 0 1.528.08 2.112.24.584.16 1.032.364 1.344.612.312.248.468.5.468.756 0 .16-.044.308-.132.444a.967.967 0 0 1-.348.324 1.006 1.006 0 0 1-.456.108c-.184 0-.384-.036-.6-.108-.208-.08-.48-.16-.816-.24-.336-.08-.78-.12-1.332-.12-.64 0-1.224.104-1.752.312a3.965 3.965 0 0 0-1.368.888c-.384.384-.68.84-.888 1.368a4.614 4.614 0 0 0-.312 1.728c0 .848.172 1.564.516 2.148a3.413 3.413 0 0 0 1.428 1.308c.608.296 1.292.444 2.052.444.696 0 1.288-.068 1.776-.204a5.536 5.536 0 0 0 1.224-.504c.336-.192.612-.36.828-.504.216-.144.396-.216.54-.216.264 0 .468.06.612.18a.868.868 0 0 1 .3.432c.064.168.096.332.096.492 0 .344-.128.692-.384 1.044-.248.352-.608.676-1.08.972-.472.288-1.052.52-1.74.696-.68.184-1.452.276-2.316.276Zm8.607-.12c-.304 0-.54-.088-.708-.264-.168-.168-.296-.436-.384-.804a7.077 7.077 0 0 1-.108-.804 67.985 67.985 0 0 1-.132-2.88c-.008-.6-.012-1.244-.012-1.932 0-.52.012-1.056.036-1.608.032-.552.076-1.096.132-1.632.064-.544.14-1.072.228-1.584.088-.52.188-1.004.3-1.452.12-.456.252-.868.396-1.236.208-.472.456-.828.744-1.068.288-.24.608-.36.96-.36.384 0 .684.14.9.42.216.272.324.68.324 1.224 0 .288-.012.608-.036.96-.024.352-.056.708-.096 1.068-.04.36-.08.708-.12 1.044-.032.336-.064.636-.096.9a7.304 7.304 0 0 0-.036.624c0 .24.048.36.144.36.088 0 .22-.096.396-.288.184-.2.44-.424.768-.672.336-.256.772-.48 1.308-.672.536-.2 1.2-.3 1.992-.3.88 0 1.608.164 2.184.492.584.32 1.044.752 1.38 1.296.336.536.576 1.132.72 1.788.144.656.216 1.312.216 1.968 0 .328-.024.692-.072 1.092-.04.4-.096.804-.168 1.212-.072.4-.156.776-.252 1.128a4.618 4.618 0 0 1-.3.876c-.144.28-.34.488-.588.624-.24.144-.536.216-.888.216-.288 0-.508-.064-.66-.192a1.122 1.122 0 0 1-.336-.504 3.04 3.04 0 0 1-.024-.696c.024-.304.052-.644.084-1.02.04-.384.072-.78.096-1.188.024-.416.028-.816.012-1.2a6.436 6.436 0 0 0-.144-1.236 4.005 4.005 0 0 0-.396-1.14 2.073 2.073 0 0 0-.756-.84c-.32-.208-.728-.312-1.224-.312-.616 0-1.16.108-1.632.324a3.782 3.782 0 0 0-1.176.804 4.239 4.239 0 0 0-.732 1.02c-.168.352-.268.664-.3.936-.04.528-.08 1.012-.12 1.452-.04.432-.084.828-.132 1.188a12.172 12.172 0 0 1-.324 1.764c-.128.368-.308.644-.54.828-.224.184-.5.276-.828.276Zm19.94.228c-1.344 0-2.508-.204-3.492-.612-.984-.408-1.744-1.036-2.28-1.884-.536-.856-.804-1.944-.804-3.264 0-1.096.18-2.052.54-2.868a5.81 5.81 0 0 1 1.512-2.064 6.359 6.359 0 0 1 2.22-1.236c.84-.28 1.736-.42 2.688-.42.648 0 1.26.068 1.836.204.584.136 1.1.348 1.548.636.456.28.812.64 1.068 1.08.256.44.384.964.384 1.572 0 .648-.136 1.176-.408 1.584-.272.4-.644.716-1.116.948a6.538 6.538 0 0 1-1.608.504c-.592.104-1.212.184-1.86.24-.328.056-.716.104-1.164.144-.448.032-.884.06-1.308.084-.416.016-.74.024-.972.024-.24 0-.404.032-.492.096-.088.064-.132.18-.132.348 0 .2.056.436.168.708.112.264.272.524.48.78.384.472.828.788 1.332.948.512.152 1.14.228 1.884.228.648 0 1.24-.076 1.776-.228.536-.16 1.016-.316 1.44-.468.432-.16.82-.24 1.164-.24.312 0 .556.06.732.18.184.112.276.336.276.672 0 .304-.14.596-.42.876-.272.28-.652.524-1.14.732a7.648 7.648 0 0 1-1.716.504c-.656.128-1.368.192-2.136.192Zm-.948-6.672c.648 0 1.252-.06 1.812-.18.56-.128 1.012-.34 1.356-.636.352-.304.528-.72.528-1.248 0-.624-.228-1.092-.684-1.404-.456-.32-1.096-.48-1.92-.48-.488 0-.964.088-1.428.264a4.01 4.01 0 0 0-1.236.708c-.36.304-.648.648-.864 1.032a2.48 2.48 0 0 0-.324 1.236c0 .224.088.388.264.492.184.096.476.156.876.18.408.024.948.036 1.62.036Zm14.91 6.096c-.432 0-.868-.064-1.308-.192a2.369 2.369 0 0 1-1.116-.72c-.304-.36-.484-.868-.54-1.524a36.253 36.253 0 0 1-.072-.792 99.364 99.364 0 0 1-.072-.948l-.048-1.056c-.008-.368-.02-.74-.036-1.116a54.735 54.735 0 0 1-.012-1.14c-.008-.36-.076-.596-.204-.708-.12-.112-.308-.18-.564-.204a8.552 8.552 0 0 0-.588-.036 35.792 35.792 0 0 1-1.38-.084c-.312-.032-.548-.132-.708-.3-.16-.176-.24-.424-.24-.744 0-.216.044-.38.132-.492a.906.906 0 0 1 .396-.276c.176-.064.372-.108.588-.132.424-.04.772-.076 1.044-.108.28-.032.54-.06.78-.084.256-.032.436-.1.54-.204.112-.104.184-.296.216-.576.016-.168.028-.364.036-.588l.048-.66c.024-.224.048-.416.072-.576.088-.392.212-.68.372-.864.16-.184.416-.276.768-.276.288 0 .512.048.672.144a.803.803 0 0 1 .372.42c.08.192.144.44.192.744.016.248.028.468.036.66.016.192.028.368.036.528l.024.42.048.384c.024.232.1.4.228.504.128.096.316.156.564.18.216.024.452.052.708.084.264.024.516.048.756.072.248.016.452.04.612.072.328.04.608.128.84.264.232.136.348.36.348.672 0 .288-.092.516-.276.684-.184.16-.436.252-.756.276-.488.008-.94.012-1.356.012a19.29 19.29 0 0 0-.972 0 .707.707 0 0 0-.432.168c-.096.088-.152.32-.168.696v.936l.024.96c.008.32.02.636.036.948.016.304.036.592.06.864s.052.52.084.744c.064.472.18.788.348.948.176.16.408.24.696.24.344 0 .612-.068.804-.204.2-.144.368-.288.504-.432a.665.665 0 0 1 .48-.216c.2 0 .344.056.432.168.096.104.144.26.144.468 0 .264-.096.516-.288.756a2.825 2.825 0 0 1-.744.636 4.037 4.037 0 0 1-1.02.432 3.974 3.974 0 0 1-1.14.168ZM46.134 38.636c-.928 0-1.824-.104-2.688-.312a7.113 7.113 0 0 1-2.303-.996 4.945 4.945 0 0 1-1.596-1.776c-.392-.736-.588-1.632-.588-2.688 0-1.16.188-2.172.563-3.036.385-.872.913-1.596 1.584-2.172a6.67 6.67 0 0 1 2.328-1.308 8.937 8.937 0 0 1 2.845-.444c.911 0 1.803.116 2.675.348a7.206 7.206 0 0 1 2.352 1.092 5.324 5.324 0 0 1 1.657 1.932c.416.784.623 1.732.623 2.844 0 .84-.172 1.648-.515 2.424a6.342 6.342 0 0 1-1.477 2.088c-.64.608-1.42 1.092-2.34 1.452-.911.368-1.951.552-3.12.552Zm-.108-2.652c.816 0 1.508-.124 2.076-.372.569-.256 1.029-.588 1.38-.996.36-.416.62-.868.78-1.356a4.44 4.44 0 0 0 .252-1.452c0-.672-.132-1.24-.396-1.704a3.151 3.151 0 0 0-1.032-1.14 4.334 4.334 0 0 0-1.428-.624 6.469 6.469 0 0 0-1.62-.204c-.72 0-1.4.156-2.04.468a3.73 3.73 0 0 0-1.56 1.392c-.392.616-.588 1.396-.588 2.34 0 .768.157 1.428.468 1.98.32.544.793.96 1.416 1.248.624.28 1.389.42 2.292.42Zm15.61 2.796c-1.151 0-2.135-.18-2.951-.54a4.885 4.885 0 0 1-1.992-1.536c-.512-.672-.888-1.48-1.128-2.424-.24-.952-.36-2.02-.36-3.204 0-.288.008-.576.024-.864.024-.296.056-.58.096-.852s.092-.516.156-.732c.144-.552.352-.948.624-1.188.272-.248.6-.372.984-.372.36 0 .632.076.816.228.184.152.304.344.36.576.064.224.1.448.108.672V30.404l.024.576c.04 1.024.164 1.928.372 2.712.208.776.548 1.384 1.02 1.824.48.432 1.132.648 1.956.648.84 0 1.516-.172 2.028-.516.512-.352.904-.856 1.176-1.512.28-.664.488-1.46.624-2.388.04-.24.072-.484.096-.732.032-.256.056-.512.072-.768l.072-.768.096-.792c.088-.52.244-.924.468-1.212.224-.288.556-.432.996-.432.384 0 .668.128.852.384.192.248.324.6.396 1.056a16.503 16.503 0 0 1 .048 1.764c0 .296-.008.588-.024.876-.008.288-.024.576-.048.864-.104 1.472-.424 2.716-.96 3.732A5.286 5.286 0 0 1 65.333 38c-.992.52-2.224.78-3.696.78Zm10.217-.516c-.376 0-.672-.1-.888-.3-.216-.2-.372-.524-.468-.972a5.862 5.862 0 0 1-.06-.708 16.817 16.817 0 0 1 0-.9c.008-.336.028-.704.06-1.104.096-1.592.42-2.94.972-4.044.552-1.112 1.32-1.956 2.304-2.532.984-.584 2.156-.876 3.516-.876 1.368 0 2.54.276 3.516.828.976.552 1.724 1.4 2.244 2.544.52 1.144.78 2.604.78 4.38 0 .32-.008.616-.024.888-.008.272-.024.52-.048.744-.024.224-.06.428-.108.612-.12.512-.3.88-.54 1.104-.232.224-.536.336-.912.336-.384 0-.676-.064-.876-.192-.2-.128-.344-.32-.432-.576a3.997 3.997 0 0 1-.18-.948c-.024-.6-.048-1.128-.072-1.584a16.447 16.447 0 0 0-.084-1.236 15.653 15.653 0 0 0-.12-1.02c-.048-.32-.108-.64-.18-.96-.184-.816-.492-1.436-.924-1.86-.432-.424-1.076-.636-1.932-.636-.824 0-1.488.228-1.992.684-.496.456-.88 1.084-1.152 1.884-.12.336-.22.688-.3 1.056-.08.368-.148.748-.204 1.14-.048.392-.092.804-.132 1.236-.032.432-.064.884-.096 1.356-.04.448-.136.792-.288 1.032-.152.24-.344.404-.576.492-.232.088-.5.132-.804.132Zm20.018-.012c-.432 0-.868-.064-1.308-.192a2.369 2.369 0 0 1-1.116-.72c-.304-.36-.484-.868-.54-1.524a36.253 36.253 0 0 1-.072-.792 99.364 99.364 0 0 1-.072-.948l-.048-1.056c-.008-.368-.02-.74-.036-1.116a54.735 54.735 0 0 1-.012-1.14c-.008-.36-.076-.596-.204-.708-.12-.112-.308-.18-.564-.204a8.552 8.552 0 0 0-.588-.036 35.792 35.792 0 0 1-1.38-.084c-.312-.032-.548-.132-.708-.3-.16-.176-.24-.424-.24-.744 0-.216.044-.38.132-.492a.906.906 0 0 1 .396-.276c.176-.064.372-.108.588-.132.424-.04.772-.076 1.044-.108.28-.032.54-.06.78-.084.256-.032.436-.1.54-.204.112-.104.184-.296.216-.576.016-.168.028-.364.036-.588l.048-.66c.024-.224.048-.416.072-.576.088-.392.212-.68.372-.864.16-.184.416-.276.768-.276.288 0 .512.048.672.144a.803.803 0 0 1 .372.42c.08.192.144.44.192.744.016.248.028.468.036.66.016.192.028.368.036.528l.024.42.048.384c.024.232.1.4.228.504.128.096.316.156.564.18.216.024.452.052.708.084.264.024.516.048.756.072.248.016.452.04.612.072.328.04.608.128.84.264.232.136.348.36.348.672 0 .288-.092.516-.276.684-.184.16-.436.252-.756.276-.488.008-.94.012-1.356.012a19.29 19.29 0 0 0-.972 0 .707.707 0 0 0-.432.168c-.096.088-.152.32-.168.696v.936l.024.96c.008.32.02.636.036.948.016.304.036.592.06.864s.052.52.084.744c.064.472.18.788.348.948.176.16.408.24.696.24.344 0 .612-.068.804-.204.2-.144.368-.288.504-.432a.665.665 0 0 1 .48-.216c.2 0 .344.056.432.168.096.104.144.26.144.468 0 .264-.096.516-.288.756a2.825 2.825 0 0 1-.744.636 4.037 4.037 0 0 1-1.02.432 3.974 3.974 0 0 1-1.14.168Zm11.351.576c-1.344 0-2.508-.204-3.492-.612-.984-.408-1.745-1.036-2.28-1.884-.537-.856-.805-1.944-.805-3.264 0-1.096.18-2.052.54-2.868a5.81 5.81 0 0 1 1.513-2.064 6.36 6.36 0 0 1 2.22-1.236c.84-.28 1.736-.42 2.688-.42.648 0 1.26.068 1.836.204.584.136 1.1.348 1.548.636.456.28.812.64 1.067 1.08.257.44.385.964.385 1.572 0 .648-.136 1.176-.408 1.584-.272.4-.644.716-1.116.948a6.538 6.538 0 0 1-1.608.504c-.592.104-1.212.184-1.86.24-.328.056-.716.104-1.164.144-.448.032-.884.06-1.308.084-.416.016-.74.024-.972.024-.24 0-.404.032-.493.096-.088.064-.132.18-.132.348 0 .2.056.436.168.708.112.264.272.524.481.78.384.472.828.788 1.332.948.512.152 1.14.228 1.884.228.648 0 1.24-.076 1.776-.228.536-.16 1.016-.316 1.44-.468.432-.16.82-.24 1.164-.24.312 0 .556.06.732.18.184.112.276.336.276.672 0 .304-.14.596-.42.876-.272.28-.652.524-1.14.732a7.648 7.648 0 0 1-1.716.504c-.656.128-1.368.192-2.136.192Zm-.949-6.672c.649 0 1.253-.06 1.813-.18.56-.128 1.012-.34 1.356-.636.352-.304.528-.72.528-1.248 0-.624-.228-1.092-.684-1.404-.456-.32-1.096-.48-1.92-.48-.488 0-.964.088-1.428.264a4.017 4.017 0 0 0-1.236.708c-.36.304-.648.648-.864 1.032a2.48 2.48 0 0 0-.325 1.236c0 .224.088.388.264.492.184.096.477.156.877.18.408.024.948.036 1.619.036Zm10.746 6.156c-.232 0-.44-.048-.624-.144a1.714 1.714 0 0 1-.504-.372 3.06 3.06 0 0 1-.396-.564 7.535 7.535 0 0 1-.396-1.056c-.12-.4-.224-.816-.312-1.248-.08-.44-.14-.876-.18-1.308-.04-.432-.06-.832-.06-1.2 0-1.304.244-2.408.732-3.312a4.873 4.873 0 0 1 2.112-2.064c.92-.472 2.024-.708 3.312-.708.544 0 1.064.04 1.56.12.504.08.952.2 1.344.36.392.152.7.344.924.576.232.224.348.484.348.78 0 .24-.052.436-.156.588a.878.878 0 0 1-.408.312c-.16.064-.328.096-.504.096-.368 0-.772-.06-1.212-.18-.432-.128-.996-.192-1.692-.192-1.048 0-1.836.324-2.364.972-.52.648-.78 1.528-.78 2.64 0 .4.02.788.06 1.164.04.368.088.724.144 1.068.056.336.112.648.168.936.056.288.1.544.132.768.04.224.06.408.06.552 0 .496-.112.856-.336 1.08-.216.224-.54.336-.972.336Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h121v42H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AppLogoIcon;