import InputItem from './InputItemm'

const StakingInputCard = ({
    stakeTokens,
    unstakeTokens,
    muridiumBalance,
    unstakeTokenstimefalse,
}) => {
    return (
        <div>
            <InputItem 
            stakeTokens={stakeTokens}
            unstakeTokens={unstakeTokens}
            muridiumBalance={muridiumBalance}
            unstakeTokenstimefalse={unstakeTokenstimefalse}
            />
        </div>
    )
}

export default StakingInputCard