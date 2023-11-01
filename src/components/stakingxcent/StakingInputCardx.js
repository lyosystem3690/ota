import InputItem from './InputItemx'

const StakingInputCard = ({
    stakeTokens,
    unstakeTokens,
    uridiumBalance,
    unstakeTokenstimefalse,
}) => {
    return (
        <div>
            <InputItem 
            stakeTokens={stakeTokens}
            unstakeTokens={unstakeTokens}
            uridiumBalance={uridiumBalance}
            unstakeTokenstimefalse={unstakeTokenstimefalse}
            />
        </div>
    )
}

export default StakingInputCard