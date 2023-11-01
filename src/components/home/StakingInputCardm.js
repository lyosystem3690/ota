import InputItem from './InputItemm'

const StakingInputCard = ({
    stakeTokensm,
    unstakeTokensm,
    muridiumBalance,
    unstakeTokenstimefalsem,
}) => {
    return (
        <div>
            <InputItem 
            stakeTokensm={stakeTokensm}
            unstakeTokensm={unstakeTokensm}
            muridiumBalance={muridiumBalance}
            unstakeTokenstimefalsem={unstakeTokenstimefalsem}
            />
        </div>
    )
}

export default StakingInputCard